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

const SelectPizza = ({ getPizzas, togglePizza, pizzas, categories, currentCategory, isLoaded, errorLoading, selectedPizzas }) => {

	useEffect(() => {
		if (!isLoaded) {
			getPizzas()
		}
	}, [])

	const showLoading = <div className={s.loading}>Подождите, пиццы уже в пути...</div>
	const showErrorLoading = <div className={s.loading}>Извините, проблема с сервером...</div>
	const showPizzas = isLoaded ?
		<PizzaList pizzas={pizzas} togglePizza={togglePizza} selectedPizzas={selectedPizzas} /> : errorLoading ? showErrorLoading : showLoading


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