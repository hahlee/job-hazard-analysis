import React from 'react'
// import Jha from './Jha'
import JhaEditForm from './JhaEditForm'

const JhaList = ({ jhas, onDelete, editJhaId, setEditJhaId, handleEditSubmit }) => {

    return (
        <div className="jha-list">
            {jhas.map((jha, index) => {
                return (
                    (editJhaId === jha.id ? (
                        // Show edit form for current item
                        <JhaEditForm
                            jha={jha}
                            key={index}
                            onSubmit={(updatedJha) =>
                                handleEditSubmit(jha.id, updatedJha)
                            }
                            onCancel={() => setEditJhaId(null)}
                        />
                    ) : (
                        <div className="jha" key={index}>
                            <div className="title">
                                <p>Title: {jha.title}</p>
                                <p>Author: {jha.author}</p>
                                <button onClick={() => setEditJhaId(jha.id)}>Edit JHA</button>
                                <button className="delete" onClick={() => onDelete(jha.id)}>Delete JHA</button>
                            </div>
                            <table className="steps">
                                <thead>
                                    <tr>
                                        <th>Tasks</th>
                                        <th>Hazards</th>
                                        <th>Controls</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jha.steps.map((step, i) => {
                                        return (
                                            <tr className="step" key={i}>
                                                <td>{step.tasks}</td>
                                                <td>{step.hazards}</td>
                                                <td>{step.controls}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ))
                )
            })}
        </div>
    )
}

export default JhaList