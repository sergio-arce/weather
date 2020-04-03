
import React, { useEffect, useState } from 'react'
// logic
import logic from '../../logic'
// components
import Icon from '../Icon'
// loading
import Loading from '../Loading'

const Tomorrow = ({ city }) => {
	const [forecasts, setForecasts] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		(async () => {
			try {
				const results = await logic.forecastTomorrow(city)
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
