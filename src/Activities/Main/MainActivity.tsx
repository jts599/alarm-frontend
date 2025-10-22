import React from 'react'
import WeatherComponent from '../../Components/WeatherComponent'
import NextEventComponent from '../../Components/NextEventComponent'
import LightStatusComponent from '../../Components/LightStatusComponent'
import TimeComponent from '../../Components/TimeComponent'
import LightControlComponent from '../../Components/LightControlComponent'
import { IActivityProps } from '../../App'
import './MainActivity.css'

export const MainActivity: React.FC<IActivityProps> = ({ activeActivitySetter }) => {
  return (
    <div className="main-activity">
      <h1>Alarm Frontend</h1>
      
      {/* Main time display - prominent position */}
      <div className="time-section">
        <TimeComponent />
      </div>
      
      {/* Component grid */}
      <div className="components-grid">
        <div>
          <NextEventComponent />
        </div>
        <div>
          <WeatherComponent />
        </div>
        <div>
          <LightStatusComponent />
        </div>
        <div className="light-control-container">
          <LightControlComponent activeActivitySetter={activeActivitySetter} />
        </div>
      </div>
    </div>
  )
}

export default MainActivity
