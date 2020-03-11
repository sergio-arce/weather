
import React, { useState } from 'react'

 

const Search = ({ searchWeather }) => {
	const [city, setCity] = useState('')
	
	return <div className="nav">
		{/* <button> */}
			<span>
				<i className="fas fa-bars nav__item--hamburguer"></i>
			</span>
		{/* </button> */}
		
		<input 
			className="nav__item--input"
			placeholder="Search..."
			onChange={e => setCity(e.target.value)}
		/>

		{/* <button
			onClick={() => searchWeather(city)}
		> */}
			<span
				onClick={() => searchWeather(city)}
			>
				<i  className="fas fa-caret-right nav__item--send"></i>
			</span>
		{/* </button> */}
		
	</div>
}

export default Search