import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './components/About';
import AddJha from './components/AddJha';
import Footer from './components/Footer';
import Header from './components/Header';
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

  return (
    <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <AddJha jhas={jhas} setJhas={setJhas}/>
                  {jhas.length > 0 ? (
                    <JhaList
                      jhas={jhas}
                      onDelete={handleDeleteJha}
                      handleEditSubmit={handleEditSubmit}
                      editJhaId={editJhaId}
                      setEditJhaId={setEditJhaId}
                    />
                  ) : (
                    'No JHAs to Show'
                  )}
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer/>
        </div>
    </Router>
    
  )
}

export default App;
