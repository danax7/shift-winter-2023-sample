import React from 'react'
import s from './s.module.css'


const OrderPizzaCard = ({ pizzaCard, callbacks }) => {
	return (
		<div className={s.card}>
			<div className={s.imgWrapper}>
				<img src={pizzaCard.pizza.img} alt='photo' />
			</div>
			<div className={s.info}>
				<span className='name'>{pizzaCard.pizza.name}</span>
				<span></span>
			</div>
			<div className='price'>{pizzaCard.price} ₽</div>
			<div className={s.actions}>
				<div className={s.quantityActions}>
					<div onClick={() => callbacks.decreaseQuantity(pizzaCard.pizza.id)} className={s.decrease}></div>
					<div className={s.quantity}>{pizzaCard.quantity}</div>
					<div onClick={() => callbacks.increaseQuantity(pizzaCard.pizza.id)} className={s.increase}>+</div>
				</div>
				<div onClick={() => callbacks.removePizzaOrder(pizzaCard.pizza.id)} className={s.remove}>x</div>
			</div>
		</div>
	)
}

export default OrderPizzaCard