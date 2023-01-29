import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import s from './s.module.css'

// interface ISelectPizzaProps {
// 	pizzas: IPizza[],
// 	getPizzas: () => void
// }

const SelectPizza = (props) => {

	useEffect(() => {
		props.getPizzas()
	}, [])

	return (
		<div className={s.select}>
			<div className='box'>
				<div className={s.content}>

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default SelectPizza