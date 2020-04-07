
import React, { useEffect, useState } from 'react'
import logic from '../../logic/'
// components
import Loading from '../Loading'
import Icon from '../Icon'
import LocationDateTime from '../LocationDateTime'
import Temp from '../Temp'

const Today = ({ city }) => {
	const [forecasts, setForecasts] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		(async () => {
			try {
				const results = await logic.forecastToday(city)
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
		{forecasts && forecasts.map((forecast, index) => (
			<div 
				key={index}
				className="today"
			>
				<LocationDateTime
					name={forecast.city_name}
					date={forecast.last_ob_time}
				/>
				<Temp 
					temp={forecast.temp}
					max={forecast.max_temp}
					min={forecast.min_temp}
				/>
				<Icon 
					text={forecast.description}
					icon={forecast.icon}
				/>
				<p className="today--items">Wind <i className="fas fa-wind"> {forecast.wind_cdir_full}</i></p>
				<p className="today--items">Sunrise {forecast.sunrise}</p>
				<p className="today--items">Sunset {forecast.sunset}</p>
			</div>
		))}
	</>
}
export default Today
