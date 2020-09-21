import React from 'react'
import { Button } from '../Button/Button'
import './HeroSection.css'
import '../../App.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you witing for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get started
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Watch trailer <i className="far fa-play-circle" />
                </Button>

            </div>
            
        </div>
    )
}

export default HeroSection
