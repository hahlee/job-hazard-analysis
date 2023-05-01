import React from 'react'

const Jha = ({ jha, onDelete, setEditJhaId }) => {
    return (
        <div className="jha">
            <div className="title">
                <p>Title: {jha.title}</p>
                <p>Author: {jha.author}</p>
                <button className="delete" onClick={() => onDelete(jha.id)}>Delete JHA</button>
                <button type="button" onClick={() => setEditJhaId(jha.id)}>Edit JHA</button>
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
    )
}

export default Jha