import React from "react";

function StepForm({ step, index, handleStepInputChange, handleDeleteStep }) {
    return (
        <div className="step-form">
            <label>
                Tasks:
                <textarea
                    type="text"
                    name="tasks"
                    value={step.tasks}
                    onChange={(event) => handleStepInputChange(event, index)}
                />
            </label>
            <label>
                Hazards:
                <textarea
                    type="text"
                    name="hazards"
                    value={step.hazards}
                    onChange={(event) => handleStepInputChange(event, index)}
                />
            </label>
            <label>
                Controls:
                <textarea
                    type="text"
                    name="controls"
                    value={step.controls}
                    onChange={(event) => handleStepInputChange(event, index)}
                />
            </label>
            <button type="button" onClick={() => handleDeleteStep(index)}>
                Delete Step
            </button>
        </div>
    );
}

export default StepForm;