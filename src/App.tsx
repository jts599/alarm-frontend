import React, { useState } from 'react'
import MainActivity from './Activities/Main/MainActivity'
import SettingsActivity from './Activities/Settings/SettingsActivity'
import ScreenSaverActivity from './Activities/ScreenSaver/ScreenSaverActivity'

export enum Activities {
    main,
    settings,
    screensaver
}

export interface IActivityProps {
    activeActivitySetter: React.Dispatch<React.SetStateAction<Activities>>
}


export default function App() {
    const [activeActivity, setActiveActivity] = useState(Activities.main)

    const renderActivity = () => {
        const activityProps: IActivityProps = {
            activeActivitySetter: setActiveActivity
        }

        switch (activeActivity) {
            case Activities.main:
                return <MainActivity {...activityProps} />
            case Activities.settings:
                return <SettingsActivity {...activityProps} />
            case Activities.screensaver:
                return <ScreenSaverActivity {...activityProps} />
            default:
                return <MainActivity {...activityProps} />
        }
    }

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
                {renderActivity()}
            </div>
        </div>
    )
}
