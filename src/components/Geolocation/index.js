
import React, { useState, useEffect } from 'react'
// logic
import logic from '../../logic'
// components
import Icon from '../Icon'

const Geolocation = () => {
	const [locations, setLocations] = useState('')

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition( location => {
				const { coords: { latitude, longitude } } = location
				try {
					logic.forecastGeolocation(latitude, longitude)
					.then(response => setLocations(response))
					.catch(({error}) => console.log(error))
				} catch ({ message }) {
					console.log(message)
				}
			}, ({ message }) => console.log('error', message))
		}
	}, [])

	return <>
		{locations && locations.data.map((location, index) => <div key={index}> 
			<p>city_name: {location.city_name}</p>
			<Icon 
				icon={location.weather.icon}
				text={location.weather.description}
			/> 
			<p>timezone: {location.timezone}</p>
			<p>ob_time: {location.ob_time}</p>
			<p>last_ob_time: {location.last_ob_time}</p>
			<p>wind_cdir_full: {location.wind_cdir_full}</p>
			<p>sunrise: {location.sunrise}</p>
			<p>sunset: {location.sunset}</p>
			<p>datetime: {location.datetime}</p>
			<p>temp: {location.temp}</p>
		</div>)}
	</>
}
export default Geolocation
