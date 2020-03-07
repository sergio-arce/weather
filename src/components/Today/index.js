
import React, { useEffect, useState } from 'react'
// logic
import logic from '../../logic/'
// components
import Icon from '../Icon'

const Today = ({ city }) => {
	const [forecasts, setForecasts] = useState(false)

	useEffect(() => {
		forecastToday(city)
	}, [city])

	const forecastToday = city => {
		try {
			logic.forecastToday(city)
				.then(resp => setForecasts(resp))
				.catch(({ message }) => console.log('error', message))
		} catch ({ message }) {
			console.log('error-searchForCity', message)
		}
	}

	return <>
		{forecasts && forecasts.map((forecast, index) => <div key={index}>
			<p>city_name: {forecast.city_name}</p>
			<Icon 
				icon={forecast.icon}
				text={forecast.description}
			/>
			<p>temp: {forecast.temp}</p>
			<p>max_temp: {forecast.max_temp}</p>
			<p>min_temp: {forecast.min_temp}</p>
			<p>timezone: {forecast.timezone}</p>
			<p>ob_time: {forecast.ob_time}</p>
			<p>last_ob_time: {forecast.last_ob_time}</p>
			<p>wind_cdir_full: {forecast.wind_cdir_full}</p>
			<p>sunrise: {forecast.sunrise}</p>
			<p>sunset: {forecast.sunset}</p>
			<p>datetime: {forecast.datetime}</p>
			<p>lon: {forecast.lon}</p>
			<p>lat: {forecast.lat}</p>
		</div>)}
	</>
}
export default Today
