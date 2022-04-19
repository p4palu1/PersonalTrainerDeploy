import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { login } from '../actions/adminActions'
import FormContainer from '../components/FormContainer'
import Loader from "../components/Loader"
import Message from "../components/Message"
import { Link } from 'react-router-dom'



const WorkoutScreen = ({match, history, location}) => {

    const dispatch  = useDispatch()
    
    const adminLogin = useSelector((state) => state.adminLogin)
    const { loading, error, adminInfo } = adminLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (adminInfo) {
        history.push(redirect)
        }
        }, [history, adminInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
                <h1>Sign In</h1>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                    Sign In
                    </Button>
                </Form>

                <Row className='py-3'>
                    <Col>
                    New Customer?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                    </Col>
                </Row>
        </FormContainer>
    )
}

export default WorkoutScreen
