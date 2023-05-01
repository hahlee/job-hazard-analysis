import React from "react";

function AddStep({ step, index, handleStepInputChange, handleDeleteStep }) {
    return (
        <div className="add-step-form">
            <div>
                <label>
                    Tasks:
                </label>
                <textarea
                    type="text"
                    name="tasks"
                    value={step.tasks}
                    onChange={(event) => handleStepInputChange(event, index)}
                />
            </div>
            <div>
                <label>
                    Hazards:
                </label> 
                <textarea
                    type="text"
                    name="hazards"
                    value={step.hazards}
                    onChange={(event) => handleStepInputChange(event, index)}
                />
            </div>
            <div>
                <label>
                    Controls:
                </label>
                <textarea
                    type="text"
                    name="controls"
                    value={step.controls}
                    onChange={(event) => handleStepInputChange(event, index)}
                />
            </div>
            <button className="delete" type="button" onClick={() => handleDeleteStep(index)}>
                Delete Step
            </button>
        </div>
    );
}

export default AddStep;