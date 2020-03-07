
import React, { useEffect, useState } from 'react'
// logic
import logic from '../../logic'
// components
import Icon from '../Icon'

const Tomorrow = ({ city }) => {
	const [forecasts, setForecasts] = useState(false)

	useEffect(() => {
		forecastTomorrow(city)
	}, [city]) 

	const forecastTomorrow = city => {
		try {
			logic.forecastTomorrow(city)
				.then(resp => setForecasts(resp))
				.catch(({ message }) => console.log('error', message))
		} catch ({ message }) {
			console.log('error-forecastTomorrow', message)
		}
	}

	return <>
		{forecasts && forecasts.map((forecast, index) => <div key={index}>
			<p>city_name: {forecast.city_name}</p>
			<Icon 
				icon={forecast.icon}
				text={forecast.description}
			/>
			<p>timezone: {forecast.timezone}</p>
			<p>lon: {forecast.lon}</p>
			<p>lat: {forecast.lat}</p>
			<p>max_temp: {forecast.max_temp}</p>
			<p>min_temp: {forecast.min_temp}</p>
			<p>wind_cdir_full: {forecast.wind_cdir_full}</p>
			<p>valid_date: {forecast.valid_date}</p>
		</div>)}
	</>
}
export default Tomorrow
