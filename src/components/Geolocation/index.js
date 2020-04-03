
import React, { useState, useEffect } from 'react'
// logic
import logic from '../../logic'
// components
import Icon from '../Icon'
import LocationDateTime from '../LocationDateTime'
import Loading from '../Loading'
// import moment from 'moment'


const Geolocation = () => {
	const [locations, setLocations] = useState('')
	const [isVisible, setIsVisible] = useState(true)
	const [error, setError] = useState(false)
	const [errorGeolocation, setErrorGeolocation] = useState(false)

	
	useEffect(() => {

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition( location => {
				const { coords: { latitude, longitude } } = location
				try {
					logic.forecastGeolocation(latitude, longitude)
					.then(response => {
						setLocations(response)
						setIsVisible(false)
					})
					.catch(({ message }) => setError(message))
				} catch ({ message }) {
					setError(message)
				}
			}, ({ message }) => setErrorGeolocation(`Geolocation is not supported: ${message}`))
		}
		

	}, [])

	if (error) return <h2>{error}</h2>
	if(errorGeolocation) return <h2 style={{color: 'white', textAlign: 'center'}} >{errorGeolocation}</h2>

	return <>
		<Loading isVisible={isVisible} />

		{locations && locations.data.map((location, index) => (
			<div 
				key={index}
				className="geolocation--center"
			> 
				<LocationDateTime 
					name={location.city_name}
					date={location.last_ob_time}
				/>

				<p style={{fontSize: '3rem'}}>{Math.round(location.temp)} ºC</p>

				<Icon 
					icon={location.weather.icon}
					text={location.weather.description}
				/> 
				<p>sunrise: {location.sunrise}</p>
				<p>sunset: {location.sunset}</p>
				<p><i className="fas fa-wind"> {location.wind_cdir_full}</i></p>
				
			</div>
		))}
	</>
}
export default Geolocation
