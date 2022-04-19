import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { createWorkout } from "../actions/workoutActions"
import DatePicker from "react-datepicker"
import WorkoutAdmin from '../components/WorkoutAdmin'
import {useLocation} from "react-router-dom";

const WorkoutCreateScreen = ({history, match}) => {
    const dispatch = useDispatch()

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const workoutCreate = useSelector((state) => state.workoutCreate)
    const { loading, error, success, workout } = workoutCreate



    const [description, setDescription] = useState('')
    const [date, setDate] = useState(null)
    const [duration, setDuration] = useState('')    
    const [equipment, setEquipment] = useState('')
    const [revenuePerClient, setRevenuePerClient] = useState('')
    const [currentClients, setCurrentClients] = useState('')
    const [maxClients, setMaxClients] = useState('')

    const search = useLocation().search
    const redate = new URLSearchParams(search).get('date') || null

    useEffect(() => {
        if(redate !== null){
            setDate(new Date(parseInt(redate)))
        }        
    }, [redate])

    const [d, setD] = useState(null)

    const [message, setMessage] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        if(maxClients < currentClients){
            setMessage("max clients shouldn't be smaller than current clients")
            alert(message)
        } else {
            dispatch(createWorkout(
                date, 
                duration,
                equipment, 
                description, 
                revenuePerClient, 
                currentClients,
                maxClients,
            ))
            setDescription('')
            setDate(null)
            setDuration('')
            setEquipment('')
            setRevenuePerClient('')
            setCurrentClients('')
            setMaxClients('') 
        }
    }

    const changeHandler = (datePicked) => {
        var d = datePicked
        d.setHours(d.getHours() + 3)
        setDate(d)
    }



    return (
        <FormContainer>
            <h1 className="mt-5">Create Workout</h1>
            { error && <Message variant="danger">{error}</Message>}
            { loading && <Loader /> }
            { success
            &&  <>
                    <Message variant="success">Successfully created workout</Message>
                    <WorkoutAdmin workout={workout} />
                </>
            }
            { /*success && <Message variant="success">Signed up for workout</Message>*/}
            { adminInfo  ? 
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
                        Add 
                </Button>
            </Form> 
            : <Message variant="danger">Not logged in as admin</Message> 
            }
            
        </FormContainer>
    )

    
}

export default WorkoutCreateScreen

