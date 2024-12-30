import React from 'react'

import sunriseAlarm from '../assets/sunrise-alarm.svg'
import sunshineHeartIcon from '../assets/sunshine-heart-icon.svg'
import wavyLinesIcon from '../assets/wavy-lines-icon.svg'

import Tile from './Tile'

const ThreeColContainer = () => {
    return (
        <div className="three-col-container">
            <h2 className="heading">Your heading here</h2>
            <div className="tiles">
                <Tile icon={wavyLinesIcon} text={"Text"}/>
                <Tile icon={sunshineHeartIcon} text={"Text"}/>
                <Tile icon={sunriseAlarm} text={"Text"}/>
            </div>
        </div>
    )
}

export default ThreeColContainer