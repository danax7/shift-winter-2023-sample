import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import s from './s.module.css'

const HeaderComponent = ({ orderQuantity }) => {

	const showOrderQuantity = orderQuantity ? ` (${orderQuantity})` : ""

	return (
		<div className="box">
			<header className={s.header}>
				<Link to="/" >
					<Logo />
				</Link>
				<ul className={s.nav}>
					<li className={s.link}>
						<Link to="/">
							Главная
						</Link>
					</li>
					<li className={s.link}>
						<Link to="/select">
							Выбрать пиццу
						</Link>
					</li>
					<li className={s.link}>
						<Link to="/order" >
							Оформить заказ{showOrderQuantity}
						</Link>
					</li>
				</ul>
			</header>
		</div>
	)
}

export default HeaderComponent