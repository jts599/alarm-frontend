import React from 'react'
import { Activities, IActivityProps } from '../../App'
import './SettingsActivity.css'

export const SettingsActivity: React.FC<IActivityProps> = ({ activeActivitySetter }) => {
  const handleBackClick = () => {
    activeActivitySetter(Activities.main)
  }

  return (
    <div className="settings-activity">
      <div className="settings-header">
        <button className="back-button" onClick={handleBackClick}>
          <span className="back-icon">←</span>
          <span className="back-text">Back</span>
        </button>
        <h1>Settings</h1>
      </div>
      
      <div className="settings-content">
        <p>Settings interface coming soon...</p>
      </div>
    </div>
  )
}

export default SettingsActivity