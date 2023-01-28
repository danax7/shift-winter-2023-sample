import React from 'react'
import { Link } from 'react-router-dom'
import s from './s.module.css'

const Header = () => {
	return (
		<header className={s.header}>
			<Link to="/" >
				<span className={s.logo}>
					SANTORINIS
				</span>
			</Link>
			<ul className={s.nav}>
				<li className={s.link}>
					<Link to="/">
						Главная
					</Link>
				</li>
				<li className={s.link}>
					<Link to="select">
						Выбрать пиццу
					</Link>
				</li>
				<li className={s.link}>
					<Link to="order" >
						Оформить заказ
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header