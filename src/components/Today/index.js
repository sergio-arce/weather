
import React, { useEffect, useState } from 'react'
import logic from '../../logic/'
// components
import Icon from '../Icon'
import LocationDateTime from '../LocationDateTime'
import Loading from '../Loading'

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
		{forecasts && forecasts.map((forecast, index) => <div key={index}>
			<LocationDateTime
				name={forecast.city_name}
				date={forecast.last_ob_time}
			/>
			<Icon 
				icon={forecast.icon}
				text={forecast.description}
			/>
			<p><i className="fas fa-wind">{forecast.wind_cdir_full}</i></p>
			{/* <p>Wind: {forecast.wind_cdir_full}</p> */}

			<p>temp: {forecast.temp}ºC</p>


			<p>max <i className="fas fa-temperature-high"> {forecast.max_temp}</i></p>
			{/* <p>Max: {forecast.max_temp}</p> */}
			<p>min <i className="fas fa-temperature-low"> {forecast.min_temp}</i></p>
 
			{/* <p>Min: {forecast.min_temp}</p> */}

			<p>timezone: {forecast.timezone}</p>
			<p>ob_time: {forecast.ob_time}</p>

			<p style={{display: 'flex', alignItems: 'center'}}>sunrise {forecast.sunrise} </p>
			<p>sunrise: {forecast.sunrise}</p>
			<p>sunset: {forecast.sunset}</p>
			<p>datetime: {forecast.datetime}</p>
		</div>)}
	</>
}
export default Today
