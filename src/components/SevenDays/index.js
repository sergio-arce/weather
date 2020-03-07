
import React, { useEffect, useState } from 'react'
// logic
import logic from '../../logic'
// components
import Icon from '../Icon'

const SevenDays = ({ city }) => {
	const [forecasts, setForecasts] = useState(false)

	useEffect(() => {
		forecastSevenDays(city)
	}, [city]) 

	const forecastSevenDays = city => {
		try {
			logic.forecastSevenDays(city)
				.then(resp => setForecasts(resp))
				.catch(({ message }) => console.log('error', message))
		} catch ({ message }) {
			console.log('error-forecastSevenDays', message)
		}
	}

	return <>
		{forecasts && <p>city_name: {forecasts.city_name}</p>}
		{forecasts && <p>lon: {forecasts.lon}</p>}
		{forecasts && <p>lat: {forecasts.lat}</p>}
		{forecasts && <p>timezone: {forecasts.timezone}</p>}
		{forecasts && forecasts.data.map((forecast, index) => <div key={index}>
			<p>wind_cdir_full: {forecast.wind_cdir_full}</p>
			<p>valid_date: {forecast.valid_date}</p>
			<Icon 
				icon={forecast.weather.icon}
				text={forecast.weather.icon}
			/> 
			<p>max_temp: {forecast.max_temp}</p>
			<p>min_temp: {forecast.min_temp}</p>
			<p>datetime: {forecast.datetime}</p>
		</div>)}
	</>
}
export default SevenDays
