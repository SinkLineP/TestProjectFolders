import React, {useEffect, useState} from 'react';
import './App.scss';
import {createEntityAPI, createRowEntityAPI, getStructureIDAPI} from "./models/api";
import View from "./components/View/View";

function App() {
  const [entity, setEntity] = useState<{id: number, rowName: string}>({
    id: 0,
    rowName: "",
  });
  const [data, setData] = useState<{changed: any, current: any}>({
    changed: [],
    current: {}
  })
  const [getStatus, setGetStatus] = useState(true);

  //создание сущности
  useEffect(() => {
    createEntityAPI().then(r => setEntity(r));
  }, [])
  //создание строки у определенной сущности
  if (entity.id !== 0 && getStatus) {
    createRowEntityAPI(entity.id).then(r => setData(r));
    setGetStatus(false);
  }

  const [tree, setTree] = useState<any>();
  const valueItem: any[] = [{
    id: null,
    rowName: null,
    total: null,
    salary: null,
    mimExploitation: null,
    machineOperatorSalary: null,
    materials: null,
    mainCosts: null,
    supportCosts: null,
    equipmentCosts: null,
    overheads: null,
    estimatedProfit: null,
    child: [null]
  }];

  const getStructure = (value: any[]) => {
    // console.log(value);
    return setTree(value);
  }

  // получение структуры
  if (entity.id !== 0 && getStatus) {
    getStructureIDAPI(entity.id, getStructure).then(r => r);
    setGetStatus(false);
  }

  return (
    <div className="App">
        <View data={data} entity={entity} structure={tree === undefined ? valueItem : tree}/>
    </div>
  );
}

export default App;
