import React from 'react'
import PizzaCard from './PizzaCard'
import s from './s.module.css'


const PizzaList = ({ pizzas, selectedPizzas, togglePizza }) => {

	const pizzaCards = pizzas.map(pizza =>
		<PizzaCard key={pizza.id} togglePizza={togglePizza} pizza={pizza} isSelected={selectedPizzas.indexOf(pizza.id) !== -1} />)

	return (
		<div className={s.list}>
			{pizzaCards}
		</div>
	)
}

export default PizzaList