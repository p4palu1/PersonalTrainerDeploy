import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import { signForWorkout, updateWorkout } from "../actions/workoutActions"

const WorkoutSignForScreen = ({history, match}) => {
    const dispatch = useDispatch()

    const workoutSignFor = useSelector((state) => state.workoutSignFor)
    const { success, error } = workoutSignFor

    const workoutList = useSelector((state) => state.workoutList)
    const { workouts } = workoutList

    const workout = workouts.find(w => w._id === match.params.id) || {}

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [description, setDescription] = useState('')
    const [date, setDate] = useState(null)
    const [duration, setDuration] = useState('')
    const [equipment, setEquipment] = useState('')
    const [revenuePerClient, setRevenuePerClient] = useState('')
    const [currentClients, setCurrentClients] = useState('')
    const [maxClients, setMaxClients] = useState('')

    useEffect(() => {
        setDescription(workout.description)
        setDate(workout.date)
        setDuration(workout.duration)
        setEquipment(workout.equipment)
        setRevenuePerClient(workout.revenuePerClient)
        setCurrentClients(workout.currentClients + 1)
        setMaxClients(workout.maxClients) 
        if(success){
           setName('')
           setEmail('')
           setPhoneNumber('')
        }
    }, [ success ])

    const submitHandler = (e) => {
        e.preventDefault()
        if(workout.currentClients < workout.maxClients){
            dispatch(signForWorkout(match.params.id, name, email, phoneNumber))
         dispatch(updateWorkout(
                match.params.id,
                date, 
                duration,
                equipment, 
                description, 
                revenuePerClient, 
                currentClients,
                maxClients,
            ))
        }
    }

    return (
        <FormContainer>
            <h1 className="mt-5">Sign Up for Workout</h1>
            { error && <Message variant="danger">{error}</Message>}
            { success && <Message variant="success">Signed up for workout</Message>}
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name..." value={name} 
                        onChange={(e) => setName(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email..." value={email} 
                        onChange={(e) => setEmail(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number..." value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} >  
                        </Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">
                        Sign Up 
                </Button>
            </Form>    
        </FormContainer>
    )
}

export default WorkoutSignForScreen
