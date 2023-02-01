import React from 'react'
import add from '../../assets/add.svg'
import { IPizza } from '../../modulesTs/selectPageInterfaces'
import s from './s.module.css'

interface IPizzaCardProps {
	pizza: IPizza,
	isSelected: boolean,
	togglePizza: (id: number) => void
}

const PizzaCard = ({ pizza, isSelected, togglePizza }: IPizzaCardProps) => {
	return (
		<div className={s.card}>
			<div className={s.content}>
				<div className={s.imgWrapper}>
					<img src={pizza.img} alt='фото' />
				</div>
				<div className={s.info}>
					<span className='name'>{pizza.name}</span>
					<span className='size'>30см</span>
				</div>
				<div className={s.ingredients}>{pizza.ingredients.join(', ')}</div>
			</div>
			<div className={s.footer}>
				<div className='price'>{pizza.price.default} ₽</div>
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