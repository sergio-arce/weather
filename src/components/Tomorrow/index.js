
import React, { } from 'react'
// logic
import logic from '../../logic/'

const Tomorrow = () => {


	// const searchForCity = () => {
	// 	try {
	// 		logic.searchForCity('barcelona')
	// 			.then(resp => console.log('Tomorrow', resp))
	// 			.catch(({ message }) => console.log('error', message))
	// 	} catch ({ message }) {
	// 		console.log('error-searchForCity', message)
	// 	}
	// }
	return <>
		<h1>Tomorrow</h1>
		<button onClick={() => searchForCity()}>search</button>

	</>
}

export default Tomorrow
