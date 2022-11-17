import React, {createRef, useEffect, useRef, useState} from 'react';
import './App.scss';
import {createEntityAPI, createRowEntityAPI, getEntityIDAPI} from "./models/api";
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
  const [structure, getStructure] = useState<void>();
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
  // получение структуры
  if (entity.id !== 0 && getStatus) {
    getEntityIDAPI(entity.id).then(r => getStructure(r))
    setGetStatus(false);
  }

  return (
    <div className="App">
      <View data={data.current} entity={entity}/>
    </div>
  );
}

export default App;
