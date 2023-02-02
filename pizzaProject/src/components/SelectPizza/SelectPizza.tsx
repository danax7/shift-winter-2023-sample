import { useEffect } from 'react'
import Categories from '@components/ Categories/Categories'
import FooterComponent from '@components/Footer/Footer'
import HeaderContainer from '@components/Header/HeaderContainer'
import PizzaList from '@components/PizzaList/PizzaList'
import { ISelectPizzaProps } from './types'
import s from './s.module.css'

const SelectPizza = (props: ISelectPizzaProps) => {
    const { getPizzas, togglePizza, pizzas, categories, currentCategory, isLoaded, errorLoading, selectedPizzas } =
        props

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
                <div className="box">
                    <h1 className="title">Выбрать пиццу</h1>
                    <Categories categories={categories} currentCategory={currentCategory} />
                    {showPizzas}
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default SelectPizza
