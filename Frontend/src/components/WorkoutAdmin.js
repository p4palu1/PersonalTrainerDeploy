import React from 'react'
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap"
import { withRouter } from 'react-router-dom'; 

const WorkoutAdmin = ({workout, history}) => {

    const handleSignUp = (name) => {
        history.push(`/workouts/update/${workout._id}`)
    }

    return (
        <Card className="my-3 p-3 rounded">
            <Row>
                <Col md={6}>
                    <Card.Body>
                        <Card.Title as="h1">
                            <strong>{workout.description}</strong>
                        </Card.Title>
                        <Card.Text as="h3">
                            On {`${workout.date.substring(8,10)}.${workout.date.substring(5,7)}, ${workout.date.substring(11,16)} `}<i className="fas fa-clock"></i>
                        </Card.Text>
                        <Card.Text as="p">
                            {`Price: ${workout.revenuePerClient} shekels`}
                        </Card.Text>
                        <Card.Text as="p">
                            Duration: {
                            workout.duration > 1 
                            ? `${workout.duration} hours` 
                            : `${workout.duration} hour` 
                            }
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={6}>
                    <Container>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item as="h4"  className="border-0">
                                    {
                                        Number(workout.maxClients - workout.currentClients) === 0 
                                        ? 'Sold Out' : Number(workout.maxClients - workout.currentClients) === 1 
                                        ? '1 Place left!'
                                        : `${Number(workout.maxClients - workout.currentClients)} Places Left`
                                    }
                                </ListGroup.Item>
                                <ListGroup.Item  className="border-0">
                                    <Button type="button" variant="dark" 
                                    disabled={Number(workout.maxClients - workout.currentClients) === 0}
                                    onClick={() => handleSignUp(workout.description)}>
                                        Edit
                                    </Button> 
                                </ListGroup.Item>
                            </ListGroup>        
                        </Card.Body> 
                    </Container>
                </Col>
            </Row>
        </Card>
    )
}


export default withRouter(WorkoutAdmin)
