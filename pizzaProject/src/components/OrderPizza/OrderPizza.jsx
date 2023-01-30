import React from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import FooterComponent from '../Footer/Footer'
import s from './s.module.css'
import { useEffect } from 'react'
import OrderList from '../OrderList/OrderList'



const OrderPizza = ({ selectedPizzas, getSinglePizza, orderedPizzas, price, quantity }) => {

	useEffect(() => {
		for (let i = 0; i < selectedPizzas.length; i++) {
			getSinglePizza(selectedPizzas[i])
		}
	}, [])

	return (
		<div className={s.main}>
			<HeaderContainer />
			<div className={s.content}>
				<div className={[s.title, 'title'].join(' ')}>Оформить заказ</div>
				<span>{quantity} товара за {price}</span>
				<OrderList pizzas={orderedPizzas} />
			</div>
			<FooterComponent />
		</div>
	)
}

export default OrderPizza