import React, { CSSProperties, useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const textBoxStyle: CSSProperties = {
        width: "50vw",
        justifySelf: "center",
        textAlign: "center",
    };

    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function toggleEditMode() {
        setEditMode(!editMode);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function toggleIsStudent() {
        setIsStudent(!isStudent);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={toggleEditMode}
                style={{
                    justifySelf: "center",
                }}
            />
            {editMode ?
                <Form.Group controlId="formNameAndStatus">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={updateName}
                        style={textBoxStyle}
                    ></Form.Control>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is Student?"
                        checked={isStudent}
                        onChange={toggleIsStudent}
                        style={{ justifySelf: "center" }}
                    />
                </Form.Group>
            :   <div>
                    {name} is {isStudent ? "" : "not"} a student.
                </div>
            }
        </div>
    );
}
