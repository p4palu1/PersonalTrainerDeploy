import React, { useState, useEffect } from 'react'
import { Container, Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Workout from "../components/Workout"
import { LinkContainer } from 'react-router-bootstrap'
import { deleteWorkout, listWorkouts } from '../actions/workoutActions'
import Loader from "../components/Loader"
import Message from "../components/Message"
import { withRouter } from 'react-router-dom'; 



const WorkoutListScreen = ({history, match}) => {

    const dispatch = useDispatch()

    const workoutList = useSelector((state) => state.workoutList)
    const { loading, error, workouts } = workoutList
    
    const workoutDelete = useSelector((state) => state.workoutDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = workoutDelete

    useEffect(() => {
       dispatch(listWorkouts())
    }, [dispatch])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?')){
          dispatch(deleteWorkout(id))
        }
    }

    return (
        (
            <>
            <Container className='mt-5'>
                <h1 className='mb-5'>Workout List</h1>
                {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> 
            : (
                <>
                    <Table striped bordered hover responsive className="table-sm">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>DESCRIPTION</td>
                                <td>PRICE</td>
                                <td>DATE</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {workouts.map(workout => <tr key={workout._id}>
                                <td>{workout._id}</td>
                                <td>{workout.description}</td>
                                <td><i class="fas fa-shekel-sign"></i> {workout.revenuePerClient}</td>
                                <td>{workout.date}</td>
                                <td>
                                    <LinkContainer to={`/workouts/update/${workout._id}`}>
                                        <Button variant="light" className="btn-sm">
                                            <i className="fas fa-edit"></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button variant="danger" 
                                    className="btn-sm" 
                                    onClick={() => deleteHandler(workout._id)}>
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>)}
                        </tbody>
                    </Table>
                    { successDelete && <Message variant="success">Workout deleted</Message>}
                    { errorDelete && <Message variant="danger">{errorDelete}</Message>}
                </>
            )}
            <Button onClick={() => history.push('/workouts/create') }>Add new workout</Button>
            </Container>
            </>
    ))
                }


export default withRouter(WorkoutListScreen)