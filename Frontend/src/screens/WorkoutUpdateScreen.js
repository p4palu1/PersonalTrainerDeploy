import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { updateWorkout } from "../actions/workoutActions"
import DatePicker from "react-datepicker"


const WorkoutUpdateScreen = ({history, match}) => {
    const dispatch = useDispatch()

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const workoutList = useSelector((state) => state.workoutList)
    const { workouts } = workoutList

    const workoutUpdate = useSelector((state) => state.workoutUpdate)
    const { loading, error, success } = workoutUpdate

    const workout = workouts.find(w => w._id === match.params.id) || {}

    const [description, setDescription] = useState('')
    const [date, setDate] = useState(null)
    const [duration, setDuration] = useState('')
    const [equipment, setEquipment] = useState('')
    const [revenuePerClient, setRevenuePerClient] = useState('')
    const [currentClients, setCurrentClients] = useState('')
    const [maxClients, setMaxClients] = useState('')


    const [d, setD] = useState(null)

    const [message, setMessage] = useState('')
    
    useEffect(() => {
            setDescription(workout.description)
            setDate(new Date(workout.date))
            setDuration(workout.duration)
            setEquipment(workout.equipment)
            setRevenuePerClient(workout.revenuePerClient)
            setCurrentClients(workout.currentClients)
            setMaxClients(workout.maxClients) 
    }, [])



    const submitHandler = (e) => {
        e.preventDefault()
        if(maxClients < currentClients){
            setMessage("max clients shouldn't be smaller than current clients")
            alert(message)
        } else {
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

    const changeHandler = (datePicked) => {
        var d = datePicked
        d.setHours(d.getHours() + 3)
        setDate(d)
    }



    return (
        <FormContainer>
            <h1 className="mt-5">Edit Workout</h1>
            { error && <Message variant="danger">{error}</Message>}
            { loading && <Loader /> }
            { success && <Message variant="success">Successfully updated workout</Message>}
            { /*success && <Message variant="success">Signed up for workout</Message>*/}
            { adminInfo && workout ? 
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Description..." value={description} 
                        onChange={(e) => setDescription(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Duration (hours)</Form.Label>
                        <Form.Control required type="number" placeholder="Enter Duration..." value={duration} 
                        onChange={(e) => setDuration(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Equipment</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Equipment..." value={equipment} 
                        onChange={(e) => setEquipment(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price for a client</Form.Label>
                        <Form.Control required type="number" placeholder="Enter Price..." value={revenuePerClient} 
                        onChange={(e) => setRevenuePerClient(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Current Amount Of Clients</Form.Label>
                        <Form.Control required type="number" placeholder="Enter Current Clients..." value={currentClients} 
                        onChange={(e) => setCurrentClients(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Max Amount Of Clients</Form.Label>
                        <Form.Control required type="number" placeholder="Enter Max Clients..." value={maxClients} 
                        onChange={(e) => setMaxClients(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label required >Choose Date</Form.Label>
                    <DatePicker
                    selected={date}
                    minDate={new Date()} 
                    dateFormat="dd/MM/yyyy" 
                    isClearable
                    scrollableMonthDropdown 
                    showTimeSelect
                    onChange={datePicked =>  changeHandler(datePicked)} />
                </Form.Group>

                <Button type="submit" variant="primary">
                        Update 
                </Button>
            </Form> 
            : <Message variant="danger">Not logged in as admin</Message> 
            }
            
        </FormContainer>
    )

    
}

export default WorkoutUpdateScreen
