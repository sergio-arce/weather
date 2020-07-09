
import React from 'react'
// import PropTypes from 'prop-types'
// moment
import moment from 'moment'

const LocationDateTime = ({ name, date }) => <div className="location">

            <p>{name}</p>
            <p>{moment().format(`MMM DD, h:mm a`)}</p>
            {/* <p>{moment(date).format(`MMM DD, h:mm`)}</p> */}
    </div>

LocationDateTime.propTypes = {
    // name: PropTypes.string.isRequired, // should throw error when is call other component???
    // date: PropTypes.string.isRequired 
}

export default LocationDateTime
