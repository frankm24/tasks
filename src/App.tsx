import React from "react";
import "./App.css";
import meme_image from "./assets/meme.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. I edited this element! Wow!
            </p>
            <p>
                FRANK MURPHY has entered the chat.
                <br />
                Hello World. Frank is here. Time to program with React and
                TypeScript.
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <h1
                    style={{
                        backgroundColor: "orange",
                        marginTop: "2rem",
                    }}
                >
                    Cool Programming Languages
                </h1>
                <Row>
                    <Col>
                        <img
                            src={meme_image}
                            alt="A meme correlating different programming languages with intelligence"
                            height="400"
                        />
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                                margin: "auto",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                                margin: "auto",
                            }}
                        ></div>
                        <ol
                            style={{
                                textAlign: "left",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "75%",
                            }}
                        >
                            <li>FORTRAN - will always be the coolest</li>
                            <li>Lisp</li>
                            <li>
                                Rust - cool people think they&#39;re superior if
                                they use this language, and they&#39;re right
                                and cool
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
