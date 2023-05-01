import React from 'react'
import Jha from './Jha'

const JhaList = ({ jhas, onDelete, editJhaId, handleEditJha, setEditJhaId, handleCancelEdit, handleEditClick }) => {

    return (
        <div className="jha-list">
            {jhas.map((jha, index) => {
                return (
                    (editJhaId === jha.id ? (
                        <form 
                            key={index}
                            className="add-jha-form" 
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleEditJha(jha.id, e.target.title.value, e.target.author.value)
                            }}
                        >
                            <div className="form-top">
                                <label>
                                    Title:
                                    <input
                                        type="text"
                                        name="title"
                                        defaultValue={jha.title}
                                    />
                                </label>
                                <label>
                                    Author:
                                    <input
                                        type="text"
                                        name="author"
                                        defaultValue={jha.author}
                                    />
                                </label>
                            </div>
                            <button className="delete" type="button" onClick={handleCancelEdit}>Cancel</button>
                            <button className="primary" type="submit">Save</button>
                        </form>
                    ) : (
                        <Jha jha={jha} key={index} onDelete={onDelete} setEditJhaId={setEditJhaId} handleEditClick={handleEditClick}/>
                    ))
                )
            })}
        </div>
    )
}

export default JhaList