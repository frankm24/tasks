import React, { CSSProperties, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(4);

    function startQuiz() {
        setQuizInProgress(true);
        setAttemptsRemaining(attemptsRemaining - 1);
    }

    function stopQuiz() {
        setQuizInProgress(false);
    }

    function awardMulligan() {
        setAttemptsRemaining(attemptsRemaining + 1);
    }

    const buttonStyle: CSSProperties = {
        width: "15vw",
        marginTop: "10px",
        marginBottom: "10px",
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            Start Attempt
            <Row>
                <Col>
                    <Button
                        onClick={startQuiz}
                        disabled={quizInProgress || attemptsRemaining === 0}
                        style={buttonStyle}
                    >
                        Start Quiz
                    </Button>
                </Col>
                <Col>
                    <Button
                        onClick={stopQuiz}
                        disabled={!quizInProgress}
                        style={buttonStyle}
                    >
                        Stop Quiz
                    </Button>
                </Col>
                <Col>
                    <Button
                        onClick={awardMulligan}
                        disabled={quizInProgress}
                        style={buttonStyle}
                    >
                        Mulligan
                    </Button>
                </Col>
                <Col>
                    <span style={{}}>
                        Attempts Remaining: {attemptsRemaining}
                    </span>
                </Col>
            </Row>
            {quizInProgress && <span>Quiz in progress.</span>}
        </div>
    );
}
