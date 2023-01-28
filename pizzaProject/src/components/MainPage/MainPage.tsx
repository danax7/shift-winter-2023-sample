import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import OrangeButton from '../OrangeButton/OrangeButton'
import s from './s.module.css'

const MainPage = () => {
	return (
		<div className={s.main}>
			<Header />
			<div className={s.btn}>
				<Link to="select">
					<OrangeButton content="Заказать" />
				</Link>
			</div>
		</div>
	)
}

export default MainPage