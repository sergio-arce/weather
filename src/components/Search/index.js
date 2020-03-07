
import React, { useState } from 'react'

const Search = ({ searchWeather }) => {
	const [city, setCity] = useState('')
	
	return <>
		<input 
			placeholder="Search city..."
			onChange={e => setCity(e.target.value)}
		/>
		<button
			onClick={() => searchWeather(city)}
		>
			Search
		</button>
		
	</>
}

export default Search

