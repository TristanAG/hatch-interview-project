import React from 'react'

const Hero = () => {
    function handleClick() {
        console.log('handle click')
    }
    
    return (
        <div className="hero">
            <div className="hero-text">
            <h1>Rise & Shine</h1>
            <p>Coffee cortado, qui beans galao froth to go. Blue mountain et single origin aged flavour variety affogato.</p>
            <button className="hero-cta" onClick={handleClick}>
                Learn More
            </button>
            </div> 
        </div>
    )
}

export default Hero