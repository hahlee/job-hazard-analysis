import React from 'react'

const ReadOnlyRow = ({ jha, handleEditClick, handleDeleteClick }) => {
  return (          
    <tr>
        <td>{jha.title}</td>
        <td>{jha.author}</td>
        <td>
            <button type="button" onClick={(event) => handleEditClick(event, jha)}>Edit</button>
            <button type="button" onClick={() => handleDeleteClick(jha.id)}>
                Delete
            </button>
        </td>
    </tr>
  )
}

export default ReadOnlyRow