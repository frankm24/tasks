import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
    ] as const;
    type Color = (typeof COLORS)[number];

    const [chosenColor, setChosenColor] = useState<Color>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color) => (
                <Form.Check
                    inline
                    type="radio"
                    key={color}
                    name="response"
                    onChange={() => {
                        setChosenColor(color);
                    }}
                    id={`color-check-${color}`}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={chosenColor === color}
                />
            ))}
            <div style={{ whiteSpace: "pre" }}>
                <div style={{ display: "inline-block" }}>You have chosen </div>
                <div
                    data-testid="colored-box"
                    style={{
                        backgroundColor: chosenColor,
                        display: "inline-block",
                    }}
                >
                    {chosenColor}
                </div>
                <div style={{ display: "inline-block" }}>.</div>
            </div>
        </div>
    );
}
