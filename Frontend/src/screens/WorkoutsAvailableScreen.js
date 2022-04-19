import React, { useState, useEffect } from 'react'
import { Container, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Workout from "../components/Workout"
import { listWorkouts } from '../actions/workoutActions'
import Loader from "../components/Loader"
import Message from "../components/Message"


const WorkoutsAvalableScreen = ({match}) => {

    const keyword = match.params.keyword
    const dispatch = useDispatch()

    const workoutList = useSelector((state) => state.workoutList)
    const { loading, error, workouts } = workoutList
    
    const [ws, setWs] = useState([])  

    useEffect(() => {
       dispatch(listWorkouts(keyword))
       setWs(workouts.sort(function(w1, w2){
           return new Date(w1.date) - new Date(w2.date)
       }))
    }, [dispatch])


    return (
        (
            <>
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            <Container className='mt-5'>
                <h1 className='mb-5'>All Available Workouts</h1>
                {workouts && workouts.map(workout => (
                    <Workout workout={workout} />
                ))}
            </Container>
            </>
    ))
                }


export default WorkoutsAvalableScreen
