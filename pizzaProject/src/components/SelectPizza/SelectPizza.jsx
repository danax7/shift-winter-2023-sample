import React, { useEffect } from 'react'
import Categories from '../ Categories/Categories'
import Footer from '../Footer/Footer'
import PizzaList from '../PizzaList/PizzaList'
import Header from '../Header/Header'
import preloader from '../../assets/preloader.gif'
import s from './s.module.css'
import HeaderContainer from '../Header/HeaderContainer'

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

	const loading = <div className={s.loading}>Подождите, пиццы уже в пути...</div>
	const errorLoadingText = <div className={s.loading}>Извините, проблема с сервером...</div>
	const pizzasList = <PizzaList pizzas={pizzas} togglePizza={togglePizza} selectedPizzas={selectedPizzas} />

	const errorOrLoading = errorLoading ? errorLoadingText : loading
	const showPizzas = isLoaded ? pizzasList : errorOrLoading


	return (
		<div className={s.select}>
			<HeaderContainer />
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