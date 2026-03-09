import React, { CSSProperties, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

const buttonStyle: CSSProperties = {
    width: "15vw",
    marginTop: "10px",
    marginBottom: "10px",
};

const colStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(1);

    function rollLeft() {
        setLeftDie(d6());
    }

    function rollRight() {
        setRightDie(d6());
    }

    return (
        <div>
            Two Dice
            <Row>
                <Col style={colStyle}>
                    <span data-testid="left-die">Left die: {leftDie}</span>
                    <Button style={buttonStyle} onClick={rollLeft}>
                        Roll Left
                    </Button>
                </Col>
                <Col style={colStyle}>
                    <span data-testid="right-die">Right die: {rightDie}</span>
                    <Button style={buttonStyle} onClick={rollRight}>
                        Roll Right
                    </Button>
                </Col>
            </Row>
            <Row>
                {leftDie === rightDie &&
                    (leftDie === 1 ?
                        <span>You Lose!</span>
                    :   <span>You Win!</span>)}
            </Row>
        </div>
    );
}
