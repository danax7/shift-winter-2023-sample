import s from './s.module.css'

interface ICategoriesProps {
	categories: string[],
	currentCategory: string
}

const Categories = ({ categories, currentCategory }: ICategoriesProps) => {

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