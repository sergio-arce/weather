
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

const Menu = () => {
	const [isActive, setIsActive] = useState('today')

	return <div className="nav__bar">
		<Link 
			onClick={() => setIsActive('today')}
			className={ isActive !== 'today' ? 'nav__bar--link' : 'active'} 
			to='/today'
		>
			Today
		</Link> 
		<Link 
			onClick={() => setIsActive('tomorrow')}
			className={isActive !== 'tomorrow' ? 'nav__bar--link' : 'active'} 
			to='/tomorrow'
		>
			Tomorrow
		</Link> 
		<Link 
			onClick={() => setIsActive('seven-days')}
			className={isActive !== 'seven-days' ? 'nav__bar--link' : 'active'} 
			to='/seven-days'
		>
			7-days
		</Link> 
		<Link 	
			onClick={() => setIsActive('sexteen-days')}
			className={isActive !== 'sexteen-days' ? 'nav__bar--link' : 'active'}
			to='/sexteen-days'
		>
			16-days
		</Link>
	</div>

}
export default withRouter(Menu)
