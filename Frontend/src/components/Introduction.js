import React from 'react'
import "../css/Introduction.css"
import '../App.css';
import image from "../css/good.png"
//import "font-awesome.min.css"
import { Container, Image } from "react-bootstrap"
const Introduction = () => {
    return (
        <div className="intro">
            <Image src={image} width="200px"/>
            <h1>I'm PersonalTrainer, nice to meet you</h1>
            <p>Our team already helped hundreds of clients become the best version of themselves💪</p>  
        </div>
    )
}

export default Introduction
