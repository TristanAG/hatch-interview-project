import React from 'react'

import sunriseAlarm from '../assets/sunrise-alarm.svg'
import sunshineHeartIcon from '../assets/sunshine-heart-icon.svg'
import wavyLinesIcon from '../assets/wavy-lines-icon.svg'

import Tile from './Tile'

const ThreeColContainer = () => {
    return (
        <div className="three-col-container">
            <h2 className="heading">Your Heading Here</h2>
            <div className="tiles">
                <Tile icon={wavyLinesIcon}/>
                <Tile icon={sunshineHeartIcon}/>
                <Tile icon={sunriseAlarm}/>
            </div>
        </div>
    )
}

export default ThreeColContainer