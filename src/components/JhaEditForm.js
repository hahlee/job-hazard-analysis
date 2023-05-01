import React, { useState } from 'react'

const JhaEditForm = ({ jha, onSubmit, onCancel} ) => {
    const [title, setTitle] = useState(jha.title);
    const [author, setAuthor] = useState(jha.author);
    const [steps, setSteps] = useState(jha.steps);

    const handleFieldChange = (index, fieldName, newValue) => {
        const newSteps = [...steps];
        newSteps[index][fieldName] = newValue;
        setSteps(newSteps);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ id: jha.id, title, author, steps });
    };
    return (
        <form onSubmit={handleSubmit} className="jha">
            <div className="title">
                <label>
                    Title:
                    <input required value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Author:
                    <input required value={author} onChange={(e) => setAuthor(e.target.value)} />
                </label>
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
                    {steps.map((step, index) => (
                        <tr key={step.id}>
                            <td>
                                <input
                                    required
                                    value={step.tasks}
                                    onChange={(e) => handleFieldChange(index, 'tasks', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    required
                                    value={step.hazards}
                                    onChange={(e) => handleFieldChange(index, 'hazards', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    required
                                    value={step.controls}
                                    onChange={(e) => handleFieldChange(index, 'controls', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form-group>
                <button className="primary" type="submit">Save JHA</button>
                <button className="delete" type="button" onClick={onCancel}> Cancel</button>
            </form-group>        
            
        </form>
    )
}

export default JhaEditForm