import React from 'react'

const Tile = ({ icon }) => {
    
    return (
        <div className="tile">
            <div className="content">
            <img src={icon} />
            <p>Text</p>
            </div>
        </div>
    )
}

export default Tile