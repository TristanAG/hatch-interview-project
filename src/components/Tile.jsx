import React from 'react'

const Tile = ({ icon, text }) => {
    
    return (
        <div className="tile">
            <div className="content">
                <img src={icon} />
                <p className="tile-text">{text}</p>
            </div>
        </div>
    )
}

export default Tile