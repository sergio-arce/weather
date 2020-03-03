
import React, { useState } from 'react'
// component
import Today from '../Today/'


const App = () => {
	const [query, setQuery] = useState('')
	const [city, setCity] = useState('')
	const [results, setResults] = useState('')

	
	{results && console.log('app', results)}
	
	return <div>
		<input 
			placeholder="Search weather your city"
			onChange={(e) => setQuery(e.target.value)}
			value={query}
		/>
		<button 
			onClick={() => {
				setCity(query)
				setQuery('')
			}}
		>
			search
		</button>
		{city && <Today city={city} setResults={setResults}/>}
		{results && results.weather.map(result => <div key={result.id}>
			<p>Sky: {result.main}</p>
			<p>Description: {result.description}</p>
			<img src={`http://openweathermap.org/img/wn/${result.icon}@2x.png`}/>
		</div>)}
	</div>
}

export default App
