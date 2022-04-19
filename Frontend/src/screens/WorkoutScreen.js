import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Container, Card, Row, Col, Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { singleWorkout } from '../actions/workoutActions'
import Loader from "../components/Loader"


const WorkoutScreen = ({match}) => {

    const dispatch  = useDispatch()

    
    
    const workoutSingle = useSelector((state) => state.workoutSingle)
    const { loading, error, workout} = workoutSingle

    useEffect(() => {
        dispatch(singleWorkout(match.params.id))
    }, [match])

    return (
        <>
            { workout
            ?   (
                <>
                    
                <Row className="mt-5">
                    <h1>{workout.description}</h1>
                    <Col md={6}>
                        {error && <div>{error}</div>}
                        {loading && <Loader />}
                        <h3>
                            On {workout.date && `${workout.date.substring(8,10)}.${workout.date.substring(5,7)}, ${workout.date.substring(11,16)} `}
                        </h3>
                        <div>
                            {`Price: ${workout.revenuePerClient} shekels`}
                        </div>
                        <div>
                            Duration: {
                            workout.duration > 1 
                            ? `${workout.duration} hours` 
                            : `${workout.duration} hour` 
                            }
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>Equipment: {workout.equipment}</div>
                        <div>
                            Total Revenue: {workout.totalRevenue}
                        </div>
                        <div>
                            Current Clients Amount: {workout.currentClients}
                        </div>
                        <div>
                            Max Amount Of Clients: {workout.maxClients}
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <h1>Clients</h1>
                    <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>PHONE NUMBER</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {workout.clients.map(client => <tr key={client._id}>
                            <td>{client._id}</td>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>
                                {client.phoneNumber}
                            </td>
                            <td>
                                <Button>Edit</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
                    
                </Row>
                </>

                )
            : (<div></div>)
            }   
        </>
    )
}

export default WorkoutScreen
