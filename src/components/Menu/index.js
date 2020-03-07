
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Menu = () => <>
		<Link to='/today'>Today</Link> 
		<Link to='/tomorrow'>Tomorrow</Link> 
		<Link to='/seven-days'>7-days</Link> 
		<Link to='/sexteen-days'>16-days</Link>
</>
export default withRouter(Menu)
