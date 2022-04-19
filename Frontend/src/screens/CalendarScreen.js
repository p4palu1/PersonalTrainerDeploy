import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Workout from "../components/Workout"
import WorkoutAdmin from "../components/WorkoutAdmin"
import { LinkContainer } from 'react-router-bootstrap'
import { listWorkouts } from '../actions/workoutActions'
import Loader from "../components/Loader"
import Message from "../components/Message"
import DatePicker from "react-datepicker"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const CalandarScreen = () => {
    const dispatch = useDispatch()

    const [date, setDate] = useState(new Date())

    const workoutList = useSelector((state) => state.workoutList)
    const { loading, error, workouts } = workoutList



    useEffect(() => {
        dispatch(listWorkouts())
    }, [dispatch])

    return (
        <Container className='mt-5'>
            <h1>Schedule</h1>
            <Row className="mt-5">
                <Col md={6}>
                    <Calendar
                        onChange={setDate}
                        value={date}
                        calendarType="Hebrew"
                    />

                </Col>
                <Col md={6}>
                    {loading && <Loader />}
                    {error && <Message variant="danger">{error}</Message>}

                        {workouts && workouts.map(workout => (
                            new Date(workout.date).getDate() === date.getDate() 
                            && new Date(workout.date).getMonth() === date.getMonth()  
                            && new Date(workout.date).getFullYear() === date.getFullYear()
                            && <WorkoutAdmin workout={workout} />
                        ))}
                    <LinkContainer to={`/workouts/create?date=${date.getTime()}`}>
                            <Button>Add a workout</Button>
                    </LinkContainer>
                    
                </Col>
            </Row>
        </Container>
            
    )
}

export default CalandarScreen
