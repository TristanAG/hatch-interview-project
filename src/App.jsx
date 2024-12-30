import sunriseAlarm from './assets/sunrise-alarm.svg'
import Hero from './components/Hero'
import ThreeColContainer from './components/ThreeColContainer'

import './styles/main.scss';

function App() {
  return (
    <div className="container">
      <header>
        <img src={sunriseAlarm} />
      </header>

      <Hero />

      <ThreeColContainer />
    </div>
  )
}

export default App
