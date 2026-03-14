import React, { CSSProperties, useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const textBoxStyle: CSSProperties = {
        width: "50vw",
        justifySelf: "center",
        textAlign: "center",
    };

    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    function awardAttempts() {
        const requestNumber = parseInt(request);
        if (requestNumber > 0) {
            setAttempts(attempts + requestNumber);
        }
    }

    function useAttempt() {
        if (attempts > 0) setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Attempts Remaining: {attempts}</Form.Label>
                <Form.Control
                    value={request}
                    onChange={updateRequest}
                    style={textBoxStyle}
                    type="number"
                ></Form.Control>
                <Button onClick={awardAttempts}>gain</Button>
                <Button disabled={attempts < 1} onClick={useAttempt}>
                    use
                </Button>
            </Form.Group>
        </div>
    );
}
