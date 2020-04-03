
import React, { useEffect, useState } from 'react'
import logic from '../../logic'
//components
import Icon from '../Icon'
import Loading from '../Loading'

const SexteenDays = ({ city }) => {
	const [forecasts, setForecasts] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		(async () => {
			try {
				const results = await logic.forecastSexteenDays(city)
				setForecasts(results)
				setIsVisible(false)
			} catch ({ message }) {
				setError(message)
			}
		})()
	}, [city]) 

	if (error) return <h2>{error}</h2>
	
	return <>
		<Loading isVisible={isVisible} /> 
		{forecasts && <p>city_name: {forecasts.city_name}</p>}
		{forecasts && <p>timezone: {forecasts.timezone}</p>}

		{forecasts && forecasts.data.map((forecast, index) => <div key={index}>
			<p>wind_cdir_full: {forecast.wind_cdir_full}</p>
			<p>valid_date: {forecast.valid_date}</p>
			<Icon 
				icon={forecast.weather.icon}
				text={forecast.weather.description}
			/> 
			<p>max_temp: {forecast.max_temp}</p>
			<p>min_temp: {forecast.min_temp}</p>
			<p>datetime: {forecast.datetime}</p>
		</div>)}
	</>
}
export default SexteenDays
