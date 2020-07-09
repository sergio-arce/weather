
import React from 'react'
import PropTypes from 'prop-types'
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

Loading.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    // text: PropTypes.string.isRequired,
    // color: PropTypes.string.isRequired
}

export default Loading