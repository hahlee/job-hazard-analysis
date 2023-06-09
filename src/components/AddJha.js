import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import AddStep from './AddStep';

function AddJha({ jhas, setJhas }) {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        steps: [{ tasks: '', hazards: '', controls: '' }],
    });

    const handleAddStep = () => {
        setFormData({
            ...formData,
            steps: [...formData.steps, { tasks: '', hazards: '', controls: '' }],
        });
    };

    const handleDeleteStep = (index) => {
        const newSteps = [...formData.steps];
        newSteps.splice(index, 1);

        setFormData({
            ...formData,
            steps: newSteps,
        });
    };

    const handleInputChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
    
        const newFormData = { ...formData};
        newFormData[fieldName] = fieldValue;
    
        setFormData(newFormData);
    }

    const handleStepInputChange = (event, index) => {
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newSteps = [...formData.steps];

        newSteps[index][fieldName] = fieldValue;

        setFormData({
            ...formData,
            steps: newSteps,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newJha = {
            id: nanoid(),
            title: formData.title,
            author: formData.author,
            steps: formData.steps
        };
    
        const newJhas = [...jhas, newJha];
        setJhas(newJhas);

        setFormData({
            title: '',
            author: '',
            steps: [{ tasks: '', hazards: '', controls: '' }]
        });
    };

    return (
        <>
            <form className="add-jha-form" onSubmit={handleSubmit}>
                <div className="form-top">
                    <div>
                        <label>
                            Title:
                        </label>
                        <input
                            type="text"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>
                            Author:
                        </label>
                        <input
                            type="text"
                            name="author"
                            required
                            value={formData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                {formData.steps.map((step, index) => (
                    <AddStep
                        key={index}
                        step={step}
                        index={index}
                        handleStepInputChange={handleStepInputChange}
                        handleDeleteStep={handleDeleteStep}
                    />
                ))}
                <div className="form-bottom">
                    <button type="button" onClick={handleAddStep}>Add Step</button>
                    <button className="primary" type="submit">Submit JHA</button>
                </div>
            </form>
        </>
    );
}

export default AddJha;