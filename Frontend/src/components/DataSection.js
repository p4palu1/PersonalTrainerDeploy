import React from 'react'
import { Image, Card, Row, Col, Container } from "react-bootstrap"


const DataSection = () => {
    return (
        <Container className="">
            <div className="d-flex justify-content-center">
                <h1 className="mb-5 mt-5 text-align-center fw-bold">My Training methods</h1>
            </div>
            <Card className="my-3 p-3 rounded border-0">
                <Row>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title as="h1">
                                <strong>HIIT Workout</strong>
                            </Card.Title>
                            <Card.Text as="p" className="text-start">
                                HIIT (high-intensity interval training) is a form of exercise that has been proven to boost metabolism and build strength, packing in the same benefits of lower and moderate-intensity aerobic workouts in a much shorter time.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={4}>
                        <Container>
                            <Card.Body>
                                <Card.Img src="/photos/pho1.jpg" variant="top"/> 
                            </Card.Body> 
                        </Container>
                    </Col>
                </Row>
            </Card>
            <Card className="my-3 p-3 rounded border-0">
                <Row>
                    <Col md={4}>
                        <Container>
                            <Card.Body>
                                <Card.Img src="/photos/pho2.jpg" variant="top"/> 
                            </Card.Body> 
                        </Container>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title as="h1" className="text-end">
                                <strong>Spinning Class</strong>
                            </Card.Title>
                            <Card.Text as="p" className="text-end">
                                Indoor cycling, often also called spinning, as an organized sport, is a form of exercise with classes focusing on endurance, strength, intervals, high intensity (race days) and recovery, and involves using a special stationary exercise bicycle with a weighted flywheel in a classroom setting.                            
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default DataSection
