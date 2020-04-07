
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

const Menu = () => {
	const [isActive, setIsActive] = useState('today')

	return <ul className="nav__bar">
		<li>
			<Link 
				onClick={() => setIsActive('today')}
				className={ isActive !== 'today' ? 'nav__bar--link' : 'active'} 
				to='/today'
			>
				Today
			</Link> 
		</li>
		<li>
			<Link 
				onClick={() => setIsActive('tomorrow')}
				className={isActive !== 'tomorrow' ? 'nav__bar--link' : 'active'} 
				to='/tomorrow'
			>
				Tomorrow
			</Link> 
		</li>
		<li>
			<Link 
				onClick={() => setIsActive('seven-days')}
				className={isActive !== 'seven-days' ? 'nav__bar--link' : 'active'} 
				to='/seven-days'
			>
				7-days
			</Link> 
		</li>
		<li>
			<Link 	
				onClick={() => setIsActive('sexteen-days')}
				className={isActive !== 'sexteen-days' ? 'nav__bar--link' : 'active'}
				to='/sexteen-days'
			>
				16-days
			</Link>
		</li>
	</ul>

}
export default withRouter(Menu)
