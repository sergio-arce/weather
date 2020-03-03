
import React, { useEffect } from 'react'
// logic
import logic from '../../logic/'
// animate icon
import ReactAnimatedWeather from 'react-animated-weather'




const Today = ({ city, setResults }) => {

	useEffect(() => {
		searchForCity()
	}, []) 

	const searchForCity = () => {

		try {
			logic.searchForCity(city)
				.then(resp => setResults(resp))
				.catch(({ message }) => console.log('error', message))
		} catch ({ message }) {
			console.log('error-searchForCity', message)
		}
	}
	console.log('today')
	return <>
		<h1>Today</h1>
		{/* <button onClick={() => searchForCity()}>search</button> */}
		<ReactAnimatedWeather
			icon={'CLEAR_DAY'}
			color={'white'}
			size={60}
			animate={true}
		/>
		<ReactAnimatedWeather
			icon={'CLEAR_NIGHT'}
			color={'goldenrod'}
			size={60}
			animate={true}
		/>
		<ReactAnimatedWeather
			icon={'PARTLY_CLOUDY_DAY'}
			color={'goldenrod'}
			size={60}
			animate={true}
		/>
		<ReactAnimatedWeather
			icon={'PARTLY_CLOUDY_NIGHT'}
			color={'goldenrod'}
			size={60}
			animate={true}
		/>
		<ReactAnimatedWeather
			icon={'RAIN'}
			color={'#b0c3d5'}
			size={80}
			animate={true}
		/>

	</>
}

export default Today
