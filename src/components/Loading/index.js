
import React from 'react'
import './style.css'
// material/ui
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = ({ isVisible, text = 'Loading...', color = 'white' }) => {

    return isVisible && <div className="loading">
        <div className="loading__container">
        <p className="loading__text" style={{ color }}>{text}</p>
            <CircularProgress 
                style={{ color }}
            />
        </div>
    </div>
}
export default Loading