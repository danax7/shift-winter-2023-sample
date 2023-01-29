import React from 'react'
import add from '../../assets/add.svg'
import s from './s.module.css'

const PizzaCard = ({ pizza, isSelected, togglePizza }) => {
	return (
		<div className={s.card}>
			<div className={s.content}>
				<div className={s.imgWrapper}>
					<img src={pizza.img} alt='фото' />
				</div>
				<div className={s.info}>
					<span className={s.name}>{pizza.name}</span>
					<span className={s.size}>30см</span>
				</div>
				<div className={s.ingredients}>{pizza.ingredients.join(', ')}</div>
			</div>
			<div className={s.footer}>
				<div className={s.price}>{pizza.price.default} ₽</div>
				<div
					onClick={() => togglePizza(pizza.id)}
					className={[s.add, isSelected ? 'selected' : ''].join(' ')}>
					<img src={add} alt='добавить в корзину' />
				</div>
			</div>
		</div>
	)
}

export default PizzaCard