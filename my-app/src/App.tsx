import React, {useEffect, useState} from 'react';
import './App.css';
import {createEntityAPI, getEntityIDAPI} from "./models/api";
import View from "./components/View/View";

function App() {

  const [ID, setID] = useState(null);
  const [entity, setEntity] = useState(null);

  useEffect(() => {
    // createEntityAPI(setID);
    getEntityIDAPI(2, setEntity);
  }, [setID, ID])

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
