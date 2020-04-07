
import React, { useEffect, useState } from 'react'
// logic
import logic from '../../logic'
// components
import Loading from '../Loading'
import Icon from '../Icon'
import LocationDateTime from '../LocationDateTime'
//moment
import moment from 'moment'

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
		{forecasts && forecasts.data.map((forecast, index) =>(
			<div 
				key={index}
				className="sevendays"
			>
				<hr className="sevendays--divider"/>
				<div className="sevendays--item">
					<Icon 
						icon={forecast.weather.icon}
						text={forecast.weather.description}
					/>
					<div>
						<p>{moment(forecast.datetime).format('dddd - DD')}</p>
						<p>Max <i className="fas fa-temperature-high">{Math.round(forecast.max_temp)}</i></p>
						<p>Min <i className="fas fa-temperature-low">{Math.round(forecast.min_temp)}</i></p>
						<p>Wind <i className="fas fa-wind"></i></p>
						<p>{forecast.wind_cdir_full}</p>
					</div> 
				</div>
			</div>
		))}
	</>
}
export default SevenDays
