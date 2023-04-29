import React, { useState } from 'react';
import './App.css';
import JhaForm from './components/JhaForm';
import JhaList from './components/JhaList';
import data from './mock-data.json';

function App() {

  const [jhas, setJhas] = useState(data);

  return(
    <div className="app-container">
      <JhaForm jhas={jhas} setJhas={setJhas}/>
      <JhaList jhas={jhas}/>
    </div>
  )
}

export default App;
