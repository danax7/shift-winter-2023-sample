import React from 'react'
import s from './s.module.css'


const Categories = ({ categories, currentCategory }) => {

	const categoriesBtns = categories.map((category, index) =>
		<div
			className={[s.item, category === currentCategory ? s.current : ''].join(' ')}
			key={index} >
			{category}</div>)

	return (
		<ul className={s.list}>
			{categoriesBtns}
		</ul>
	)
}

export default Categories