
import React, { useEffect, useState } from 'react'
// logic
import logic from '../../logic'
// components
import Icon from '../Icon'
import LocationDateTime from '../LocationDateTime'
// loading
import Loading from '../Loading'

const SevenDays = ({ city }) => {
	const [forecasts, setForecasts] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		(async () => {
			try {
				const results = await logic.forecastSevenDays(city)
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
		<LocationDateTime 
			name={forecasts.city_name}
			date={forecasts.timezone}
		/>
		{forecasts && forecasts.data.map((forecast, index) => <div key={index}>
			<Icon 
				icon={forecast.weather.icon}
				text={forecast.weather.description}
				/> 
			<p>wind_cdir_full: {forecast.wind_cdir_full}</p>
			<p>valid_date: {forecast.valid_date}</p>
			<p>max_temp: {forecast.max_temp}</p>
			<p>min_temp: {forecast.min_temp}</p>
			<p>datetime: {forecast.datetime}</p>
		</div>)}
	</>
}
export default SevenDays
