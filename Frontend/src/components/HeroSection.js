import React from 'react';
import '../App.css';
import { LinkContainer } from "react-router-bootstrap"
import { Button } from "react-bootstrap";
import '../css/HeroSection.css';


const HeroSection = () => {
    return (
    <div className='hero-container'>
      <h1>PersonalTrainer</h1>
      <p>Get into the best shape of your life</p>
      <div className='hero-btns'>
        <LinkContainer to="/workouts">
          <Button variant="success" className="btn-lg">
            SIGN FOR A WORKOUT <i class="fas fa-dumbbell"></i>
          </Button>   
        </LinkContainer>
      </div>
    </div>
  );
}

export default HeroSection