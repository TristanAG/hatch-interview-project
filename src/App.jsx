import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import sunriseAlarm from './assets/sunrise-alarm.svg'
import sunshineHeartIcon from './assets/sunshine-heart-icon.svg'
import wavyLinesIcon from './assets/wavy-lines-icon.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import Hero from './components/Hero'

import './styles/main.scss';


function App() {

 

  return (
    <div className="container">
      
      <header>
        <img src={sunriseAlarm} />
      </header>

      <Hero />

      

      <div className="three-col-container">
        <h2 className="heading">Your Heading Here</h2>
        <div className="tiles">
          <div className="tile">
            <div className="content">
              <img src={wavyLinesIcon} />
              <p>Text</p>
            </div>
          </div>
          <div className="tile">
            <div className="content">
              <img src={sunshineHeartIcon} />
              <p>Text</p>
            </div>
          </div>
          <div className="tile">
            <div className="content">
              <img src={sunriseAlarm} />
              <p>Text</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App
