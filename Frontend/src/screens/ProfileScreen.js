import React, { useState, useEffect } from 'react'
import { getAdminDetails } from "../actions/adminActions"
import { Row, Col, Form, Button } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import { updateAdminProfile } from "../actions/adminActions"

const ProfileScreen = ({history}) => {
    const dispatch = useDispatch()

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const adminUpdate = useSelector((state) => state.adminUpdate)
    const { error, success } = adminUpdate

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)


    useEffect(() => {
        if(adminInfo){
            setName(adminInfo.name)
            setEmail(adminInfo.email)
            setPhoneNumber(adminInfo.phoneNumber)
        } else{
            history.push("/login")
        }
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage("Passwords don't match")
        }
        else{
            dispatch(updateAdminProfile({ id: adminInfo._id, name, email, phoneNumber, password}))
        }
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <FormContainer>
            <h1 className="mt-5">Edit Profile</h1>
            { error && <Message variant="danger">{error}</Message>}
            { success && <Message variant="success">Admin Updated</Message>}
            { adminInfo ? 
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
                        <Form.Control type="number" placeholder="Enter Phone Number..." value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password..." value={password} 
                        onChange={(e) => setPassword(e.target.value)} >  
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password Again..." value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} >  
                        </Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">
                        Update
                </Button>
            </Form>    
            
        : <Message variant="danger">No Data</Message>
        
        }

            
        </FormContainer>
    )
}

export default ProfileScreen
