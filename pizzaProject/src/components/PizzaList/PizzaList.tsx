import React from 'react'
import { IPizza } from '../../modulesTs/selectPageInterfaces'
import PizzaCard from './PizzaCard'
import s from './s.module.css'

interface IPizzaListProps {
	pizzas: IPizza[],
	selectedPizzas: number[],
	togglePizza: (id: number) => void
}


const PizzaList = ({ pizzas, selectedPizzas, togglePizza }: IPizzaListProps) => {

	const pizzaCards = pizzas.map(pizza =>
		<PizzaCard key={pizza.id} togglePizza={togglePizza} pizza={pizza} isSelected={selectedPizzas.indexOf(pizza.id) !== -1} />)

	return (
		<div className={s.list}>
			{pizzaCards}
		</div>
	)
}

export default PizzaList