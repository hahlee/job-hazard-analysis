import React, { useState } from 'react';
import './App.css';
import AddJha from './components/AddJha';
import JhaList from './components/JhaList';
import data from './mock-data.json';

function App() {

  const [jhas, setJhas] = useState(data);
  const [editJhaId, setEditJhaId] = useState(null);

  const handleDeleteJha = (id) => {
    setJhas((jhas) => 
      jhas.filter((jha) => jha.id !== id)
    );
  };

  const handleEditSubmit = (jhaId, updatedJha) => {
    // Find the index of the item being edited
    const jhaIndex = jhas.findIndex((jha) => jha.id === jhaId);

    // Update the item with the new values
    const newJhas = [...jhas];
    newJhas[jhaIndex] = updatedJha;
    setJhas(newJhas);

    // Clear the edit state
    setEditJhaId(null);
  };

  return(
    <div className="app-container">
      <AddJha jhas={jhas} setJhas={setJhas}/>
      <JhaList jhas={jhas} onDelete={handleDeleteJha} handleEditSubmit={handleEditSubmit} editJhaId={editJhaId} setEditJhaId={setEditJhaId}/>
    </div>
  )
}

export default App;
