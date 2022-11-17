import React, {createRef, useEffect, useRef, useState} from 'react';
import './App.scss';
import {createEntityAPI, getEntityIDAPI} from "./models/api";
import View from "./components/View/View";

function App() {
  const [data, setData] = useState<{id: number, rowName: string}>({
    id: 0,
    rowName: "",
  });
  const [entity, setEntity] = useState(null);
  const [createEntityStatus, setCreateEntityStatus] = useState(true);

  //создание сущности
  useEffect(() => {
    createEntityAPI().then(r => setData(r));
  }, [])

  // получение сущности
  if (data.id !== 0 && createEntityStatus) {
    getEntityIDAPI(data.id).then(r => setEntity(r));
    setCreateEntityStatus(false);
  }


  if (entity !== null) {
    console.log(entity);
  }

  return (
    <div className="App">
      <View />
    </div>
  );
}

export default App;
