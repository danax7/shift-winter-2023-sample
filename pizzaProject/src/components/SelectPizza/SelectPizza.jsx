import React, { useEffect } from 'react'
import Categories from '../ Categories/Categories'
import Footer from '../Footer/Footer'
import PizzaList from '../PizzaList/PizzaList'
import preloader from '../../assets/preloader.gif'
import s from './s.module.css'

// interface ISelectPizzaProps {
// 	pizzas: IPizza[],
// 	getPizzas: () => void
// }

const SelectPizza = ({ getPizzas, pizzas, categories, currentCategory, isLoaded }) => {

	useEffect(() => {
		if (!isLoaded) {
			getPizzas()
		}
	}, [])

	const showPizzas = isLoaded ? <PizzaList pizzas={pizzas} /> : <div className={s.loading}>Подождите, пиццы уже в пути...</div>

	return (
		<div className={s.select}>
			<div className={s.content}>
				<div className='box'>
					<h1 className='title'>Выбрать пиццу</h1>
					<Categories categories={categories} currentCategory={currentCategory} />
					{showPizzas}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default SelectPizza