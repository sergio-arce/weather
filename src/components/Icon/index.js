
import React from 'react'
// animate
import { Animated } from 'react-animated-css'

const Icon = ({ icon, text }) => {
	return <>
		<Animated animationIn="pulse" animationOut="fadeOut" isVisible={true} style={{textAlign: 'center'}}>
			<p>{text}</p>
			<img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt={`${text}`} />
		</Animated>
	</>
}
export default Icon
