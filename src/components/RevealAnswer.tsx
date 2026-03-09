import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    function invertShowAnswer() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Button
                onClick={invertShowAnswer}
                style={{
                    width: "10vw",
                    marginBottom: "5px",
                    backgroundImage: "linear-gradient(to bottom, blue, purple)",
                }}
            >
                {showAnswer ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {showAnswer && <span style={{ margin: 0 }}>42</span>}
        </div>
    );
}
