
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Menu = () => <div className="nav__bar">
		<Link className="nav__bar--link" to='/today'>Today</Link> 
		<Link className="nav__bar--link" to='/tomorrow'>Tomorrow</Link> 
		<Link className="nav__bar--link" to='/seven-days'>7-days</Link> 
		<Link className="nav__bar--link" to='/sexteen-days'>16-days</Link>
</div>
export default withRouter(Menu)
