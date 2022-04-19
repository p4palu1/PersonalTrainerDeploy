import React from 'react'
import { Carousel, Image, Button } from "react-bootstrap"
import p1 from "../photos/p1.jpg"
import p2 from "../photos/p2.jpg"
import p3 from "../photos/p3.jpg"
import p4 from "../photos/p4.jpg"
import p5 from "../photos/p5.jpg"

const Banner = () => {

    return (
        <div>
            
                <Carousel style={{ height: '600px'}} pause="hover" variant="dark" fade>
                <Carousel.Item>
                    <Image
                    className="cimage d-block w-100 "
                    src={p4}
                    alt="Second slide"
                    style={{filter: 'brightness(50%)'}}
                    fluid
                    />
                    <Carousel.Caption>
                        <h2>Become the best version of yourself with PersonalTrainer</h2>
                        <Button type="button" variant="success" className="btn btn-block mt-5">Sign up for a lesson</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                    className="d-block w-100"
                    src={p5}
                    alt="Second slide"
                    style={{filter: 'brightness(50%)'}}
                    />
                    <Carousel.Caption>
                        <h2>Become the best version of yourself with PersonalTrainer</h2>
                        <Button variant="success" className="btn btn-block mt-5">Sign up for a lesson</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    )
}

export default Banner
