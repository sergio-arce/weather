
import React  from 'react'

const Search = ({ searchWeather }) => {

	const enterMyInput = (e) => {
		e.key === 'Enter' && searchWeather(e.target.value)
	} 
	
	return <div className="nav">
		<span>
			<i className="fas fa-bars nav__item--hamburguer"></i>
		</span>
		<input 
			className="nav__item--input"
			placeholder="Search..."
			onKeyDown={enterMyInput}
		/>
	</div>
}

export default Search