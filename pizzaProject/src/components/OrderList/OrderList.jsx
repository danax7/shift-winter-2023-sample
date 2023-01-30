import React from 'react'
import OrderPizzaCard from './OrderPizzaCard'


const OrderList = ({ pizzas, callbacks }) => {

	const pizzasList = pizzas.map(card => <OrderPizzaCard key={card.pizza.id} callbacks={callbacks} pizzaCard={card} />)

	return (
		<div>
			{pizzasList}
		</div>
	)
}

export default OrderList