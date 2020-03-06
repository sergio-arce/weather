
import React, { useState } from 'react'
// component
import Today from '../Today/'


const App = () => {
	const [query, setQuery] = useState('')
	const [city, setCity] = useState('')
	const [forecasts, setForecasts] = useState('')

	if (forecasts) {
		
		console.log('app', forecasts)
	}
	
	return <div>
		<input 
			placeholder="Search weather your city"
			onChange={(e) => setQuery(e.target.value)}
			value={query}
		/>
		<button 
			onClick={() => {
				setCity(query)
			}}
		>
			search
		</button>
		{city && <Today city={city} setForecasts={setForecasts}/>}
		{forecasts && <h2>{forecasts.city_name}</h2>}
		{forecasts && forecasts.data.map((forecast, key) => <div key={key}>
			<img src={`https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png`} alt="icon_current"/>
			<p>{forecast.weather.description}</p>
		</div>)}
		
		{/* {forecasts && <p>City: {forecasts.city_name}</p>}
		{forecasts && <p>Description: {forecasts.description}</p>}
		{forecasts && <p>Timezone: {forecasts.timezone}</p>}
		{forecasts && <p>Sunset: {forecasts.sunset}</p>}
		{forecasts && <img src={`https://www.weatherbit.io/static/img/icons/${forecasts.icon}.png`} alt="icon_current"/>} */}

	</div>
}

export default App
