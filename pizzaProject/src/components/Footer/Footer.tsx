import React from 'react'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import inst from '../../assets/images/inst.svg'
import './s.css'
import Logo from '../Logo/Logo'


const FooterComponent = () => {
	return (
		<footer className='footer'>
			<div className='box'>
				<div className='left'>
					<Logo />
					<span>Copyright © 2000 - 2023</span>
				</div>
				<div className='right'>
					<img src={facebook} alt="facebook" />
					<img src={twitter} alt="twitter" />
					<img src={inst} alt="instagram" />
				</div>
			</div>
		</footer>
	)
}

export default FooterComponent