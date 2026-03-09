import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, changeQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    function switchQuestionType() {
        changeQuestionType(
            questionType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            Change Type
            <Button
                onClick={switchQuestionType}
                style={{
                    width: "15vw",
                    marginTop: "10px",
                    marginBottom: "5px",
                }}
            >
                Change Type
            </Button>
            <span>
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </span>
        </div>
    );
}
