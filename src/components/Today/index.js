
import React, { useEffect } from 'react'
// logic
import logic from '../../logic/'

const Today = ({ city, setForecasts }) => {

	useEffect(() => {
		searchForCity()
	}, []) 

	const searchForCity = () => {
		try {
			logic.searchForCity(city)
				.then(resp => setForecasts(resp))
				.catch(({ message }) => console.log('error', message))
		} catch ({ message }) {
			console.log('error-searchForCity', message)
		}
	}
	return <>
		<h1>Today</h1>
		{/* <button onClick={() => searchForCity()}>search</button> */}

	</>
}

export default Today
