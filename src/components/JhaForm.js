import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import StepForm from './StepForm';



function JhaForm({ jhas, setJhas }) {


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
    };

    return (
        <>
            <form className="jha-form" onSubmit={handleSubmit}>
                <div className="form-top">
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Author:
                        <input
                            type="text"
                            name="author"
                            required
                            value={formData.author}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                {formData.steps.map((step, index) => (
                    <StepForm
                        key={index}
                        step={step}
                        index={index}
                        handleStepInputChange={handleStepInputChange}
                        handleDeleteStep={handleDeleteStep}
                    />
                ))}
                <form-group>
                    <button type="button" onClick={handleAddStep}>Add Step</button>
                    <button className="primary" type="submit">Submit JHA</button>
                </form-group>
            </form>
        </>
    );
}

export default JhaForm;