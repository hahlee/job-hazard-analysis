import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import data from './mock-data.json';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {

  const [jhas, setJhas] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: '',
    author: ''
  })

  const [editFormData, setEditFormData] = useState({
    title: '',
    author: ''
  })

  const [editJhaId, setEditJhaId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newJha = {
      id: nanoid(),
      title: addFormData.title,
      author: addFormData.author,
    };

    const newJhas = [...jhas, newJha];
    setJhas(newJhas);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedJha = {
      id: editJhaId,
      title: editFormData.title,
      author: editFormData.author
    }

    const newJhas = [...jhas];

    const index = jhas.findIndex((jha) => jha.id === editJhaId);

    newJhas[index] = editedJha;

    setJhas(newJhas);
    setEditJhaId(null);
  }

  const handleEditClick = (event, jha) => {
    event.preventDefault();
    setEditJhaId(jha.id);

    const formValues = {
      title: jha.title,
      author: jha.author
    }

    setEditFormData(formValues);
  }

  const handleCancelClick = () => {
    setEditJhaId(null);
  }

  const handleDeleteClick = (jhaId) => {
    const newJhas = [...jhas];

    const index = jhas.findIndex((jha) => jha.id === jhaId);

    newJhas.splice(index, 1);

    setJhas(newJhas);
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jhas.map((jha) =>(
              <>
                {editJhaId === jha.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow 
                    jha={jha}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a JHA</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="author"
          required="required"
          placeholder="Enter an author"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add JHA</button>
      </form>
    </div>
  );
}

export default App;
