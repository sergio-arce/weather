
import React from 'react'
// moment
import moment from 'moment'

const LocationDateTime = ({name, date}) => {

    return <div className="location">
        <p>{name}</p>
		<p>{moment().format(`MMM DD, h:mm`)}</p>
        {/* <p>{moment(date).format(`MMM DD, h:mm`)}</p> */}
    </div>
}

export default LocationDateTime