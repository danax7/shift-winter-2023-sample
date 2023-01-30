import React from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import FooterComponent from '../Footer/Footer'
import s from './s.module.css'
import { useEffect } from 'react'
import OrderList from '../OrderList/OrderList'



const OrderPizza = ({ selectedPizzas, orderedPizzas, callbacks }) => {

	useEffect(() => {
		for (let i = 0; i < selectedPizzas.length; i++) {
			callbacks.getSinglePizza(selectedPizzas[i])
		}
	}, [])

	const pizzaQuantity = orderedPizzas.reduce((s, card) => { return s + card.quantity }, 0)
	const pizzaPrice = orderedPizzas.reduce((s, card) => { return s + card.price }, 0)

	return (
		<div className={s.main}>
			<HeaderContainer />
			<div className={s.content}>
				<div className="box">
					<div className={[s.title, 'title'].join(' ')}>Оформить заказ</div>
					<span className={s.generalInfo}>{pizzaQuantity} товара за {pizzaPrice} ₽</span>
					<OrderList pizzas={orderedPizzas} callbacks={callbacks} />
				</div>
			</div>
			<FooterComponent />
		</div>
	)
}

export default OrderPizza