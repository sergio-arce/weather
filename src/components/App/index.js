
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// components 
import Search from '../Search'
import Menu from '../Menu'
import Today from '../Today'
import Tomorrow from '../Tomorrow'
import SevenDays from '../SevenDays'
import SexteenDays from '../SexteenDays'
import Geolocation from '../Geolocation'
// routes
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
// // animated
import { Animated } from 'react-animated-css'

const App = ({ history }) => {
	const [city, setCity] = useState(false)

	const searchWeather = query => {
		setCity(query)
		history.push('/today')
	}
	return <>
		<Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
			<div className="header">
				<Search searchWeather={searchWeather}/>
				{city && <Menu />}
			</div>
		</Animated>
		<hr className="divider"/>
		<Switch>
			<Route exact path='/' render={() => !city && <Geolocation />} />
			<Route exact path='/today' render={() => city ? <Today city={city} /> : <Redirect  to='/' />} />
			<Route exact path='/tomorrow' render={() => city ? <Tomorrow city={city} /> : <Redirect to='/' />} />
			<Route exact path='/seven-days' render={() => city ? <SevenDays city={city} /> : <Redirect to='/' />} />
			<Route exact path='/sexteen-days' render={() => city ? <SexteenDays city={city} /> : <Redirect to='/' /> } /> 
		</Switch>
	</>
}
App.propTypes = {
	history: PropTypes.object.isRequired
}

export default withRouter(App)
