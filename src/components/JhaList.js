import React from 'react'

const JhaList = ({ jhas }) => {
    return (
        <div className="jha-list">
            {jhas.map((jha, index) => (
                <div className="jha" key={index}>
                    <div className="title">
                        <p>Title: {jha.title}</p>
                        <p>Author: {jha.author}</p>
                    </div>
                    <div className="steps">
                        <tr>
                            <th>Tasks</th>
                            <th>Hazards</th>
                            <th>Controls</th>
                        </tr>
                        {jha.steps.map((step, i) => {
                            return (
                                <tr className="step" key={i}>
                                    <td>{step.tasks}</td>
                                    <td>{step.hazards}</td>
                                    <td>{step.controls}</td>
                                </tr>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JhaList