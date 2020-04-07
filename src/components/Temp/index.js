
import React from 'react'

const Temp = ({ temp, max, min }) => <>
    <div className="temp">
            {temp && <p className="temp--temperature">{Math.round(temp)} ºC</p>}
            <div className="temp--items">
                {max && <p><i className="fas fa-temperature-high">{Math.round(max)}</i>/<i className="fas fa-temperature-low">{Math.round(min)}</i></p>}
            </div>
    </div>
</>

export default Temp