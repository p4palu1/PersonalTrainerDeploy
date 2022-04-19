import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from "../actions/adminActions"
import { withRouter } from 'react-router-dom'; 
import { Route } from "react-router-dom"
import SearchBox from "./SearchBox"


const Header = ({history}) => {

    const dispatch = useDispatch()
    
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin


    const logoutHandler = () => {
            dispatch(logout())
            history.push('/login')
    }
    return (
        <header>
            <Navbar bg="dark"  variant="dark" expand="lg" collapseOnSelect>
                
                    <Container>
                        <Navbar.Brand href="/">PersonalTrainer</Navbar.Brand>
                        <Route render={({history}) => <SearchBox history={history}/>} />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="ms-auto" id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            { adminInfo 
                            ? (
                                <>
                                    <Nav.Link href="/profile">
                                        <i className=""></i> 
                                        <span>Profile</span>
                                    </Nav.Link>
                                    <Nav.Link href="/schedule">
                                        <i className=""></i> 
                                        <span>Schedule</span>
                                    </Nav.Link>
                                    <Nav.Link href="/admin/workouts">
                                        <i className=""></i> 
                                        <span>Workouts</span>
                                    </Nav.Link>
                                    <Nav.Link href="" onClick={logoutHandler}>
                                        <i className=""></i> 
                                        <span>Log Out</span>
                                    </Nav.Link>
                                </>
                            )
                            : (
                                <Nav.Link href="/login">
                                    <i className=""></i> 
                                    <span>Admin Login</span>
                                </Nav.Link>
                            )
                        }       
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                
            </Navbar>
        </header>
    )
}

export default withRouter(Header);
