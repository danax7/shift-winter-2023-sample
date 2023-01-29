import React from 'react'
import PizzaCard from './PizzaCard'
import s from './s.module.css'


const PizzaList = ({ pizzas }) => {

	const pizzaCards = pizzas.map(pizza => <PizzaCard key={pizza.id} pizza={pizza} />)

	return (
		<div className={s.list}>
			{pizzaCards}
		</div>
	)
}

export default PizzaList