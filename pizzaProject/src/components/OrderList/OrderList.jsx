import React from 'react'
import OrderPizzaCard from './OrderPizzaCard'
import s from './s.module.css'


const OrderList = ({ pizzas, callbacks }) => {

	const pizzasList = pizzas.map(card => <OrderPizzaCard key={card.pizza.id} callbacks={callbacks} pizzaCard={card} />)

	return (
		<div>
			{pizzasList}
		</div>
	)
}

export default OrderList