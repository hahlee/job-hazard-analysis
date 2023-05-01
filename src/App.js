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

  const handleEditClick = (id) => {
      setEditJhaId(id);
  };

  const handleCancelEdit = () => {
    setEditJhaId(null);
  };

  const handleEditJha = (id, title, author) => {
    setJhas((jhas) => 
      jhas.map((jha) => 
        jha.id === id ? { ...jha, title, author } : jha
      )
    );
    setEditJhaId(null);
  };

  return(
    <div className="app-container">
      <AddJha jhas={jhas} setJhas={setJhas}/>
      <JhaList jhas={jhas} onDelete={handleDeleteJha} editJhaId={editJhaId} handleEditJha={handleEditJha} setEditJhaId={setEditJhaId} handleCancelEdit={handleCancelEdit} handleEditClick={handleEditClick}/>
    </div>
  )
}

export default App;
