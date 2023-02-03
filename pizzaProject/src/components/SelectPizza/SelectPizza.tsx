import { useEffect } from 'react'
import Categories from '@components/ Categories/Categories'
import FooterComponent from '@components/Footer/Footer'
import HeaderContainer from '@components/Header/HeaderContainer'
import PizzaList from '@components/PizzaList/PizzaList'
import { ISelectPizzaProps } from './types'
import s from './s.module.css'

const SelectPizza = (props: ISelectPizzaProps) => {
    const { getPizzas, togglePizza, pizzas, categories, currentCategory, isLoaded, selectedPizzas } = props

    useEffect(() => {
        getPizzas()
    }, [])

    return (
        <div className={s.select}>
            <HeaderContainer />
            <div className={s.content}>
                <div className="box">
                    <h1 className="title">Выбрать пиццу</h1>
                    <Categories categories={categories} currentCategory={currentCategory} />
                    {isLoaded && (
                        <PizzaList pizzas={pizzas} togglePizza={togglePizza} selectedPizzas={selectedPizzas} />
                    )}
                    {!isLoaded && <div className={s.loading}>Подождите, пиццы уже в пути...</div>}
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default SelectPizza
