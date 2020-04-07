
import React, { useEffect, useState } from 'react'
// logic
import logic from '../../logic'
// components
import Loading from '../Loading'
import Icon from '../Icon'
import LocationDateTime from '../LocationDateTime'
import Temp from '../Temp'

const Tomorrow = ({ city }) => {
	const [forecasts, setForecasts] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		(async () => {
			try {
				const results = await logic.forecastTomorrow(city)
				console.log(results)
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
				className="tomorrow"
			>
				<LocationDateTime 
					name={forecast.city_name}
					date={forecast.valid_date}
				/>
				<Temp 
					max={forecast.max_temp}
					min={forecast.min_temp}
				/> 
				<Icon 
					icon={forecast.icon}
					text={forecast.description}
				/>
				<p className="tomorrow--items">Wind <i className="fas fa-wind"> {forecast.wind_cdir_full}</i></p>
				<p className="tomorrow--items">Long {forecast.lon}</p>
				<p className="tomorrow--items">Lat {forecast.lat}</p>
			</div>
		))}
	</>
}
export default Tomorrow
