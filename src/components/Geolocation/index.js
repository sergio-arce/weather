
import React, { useState, useEffect } from 'react'
// logic
import logic from '../../logic'
// components
import Loading from '../Loading'
import Icon from '../Icon'
import LocationDateTime from '../LocationDateTime'
import Temp from '../Temp'

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
						console.log(response)
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

	// forecast for hour
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const items = await fetch('https://api.weatherbit.io/v2.0/history/hourly?lat=41.4504118&lon=2.1941695&start_date=2020-04-05&end_date=2020-04-06&key=e66c10579e7f43d6b80819c7dd3c9d20')
	// 			const json = await items.json()
	// 			console.log(json)
	// 		} catch ({ message }) {
	// 			console.log(message)
	// 		}
	// 	})()
	// }, [])
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
				<Temp 
					temp={location.temp} 
				/> 
				<Icon 
					icon={location.weather.icon}
					text={location.weather.description}
				/> 
				<p className="geolocation--items">Sunrise {location.sunrise}</p>
				<p className="geolocation--items">Sunset {location.sunset}</p>
				<p className="geolocation--items"> Wind <i className="fas fa-wind"> {location.wind_cdir_full}</i></p>
			</div>
		))}
	</>
}
export default Geolocation
