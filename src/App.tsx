import React from 'react'
import WeatherComponent from './Components/WeatherComponent'
import NextEventComponent from './Components/NextEventComponent'
import LightStatusComponent from './Components/LightStatusComponent'
import TimeComponent from './Components/TimeComponent'
import LightControlComponent from './Components/LightControlComponent'

export default function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '1280px',
        height: '720px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        padding: '32px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="app">
          <h1>Alarm Frontend</h1>
          
          {/* Main time display - prominent position */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '20px',
            marginBottom: '40px'
          }}>
            <TimeComponent />
          </div>
          
          {/* Component grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '20px', 
            flex: 1
          }}>
            <div>
              <NextEventComponent />
            </div>
            <div>
              <WeatherComponent />
            </div>
            <div>
              <LightStatusComponent />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <LightControlComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
