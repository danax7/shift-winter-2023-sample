import PizzaCard from './PizzaCard'
import { IPizzaListProps } from './types'
import s from './s.module.css'

const PizzaList = ({ pizzas, selectedPizzas, togglePizza }: IPizzaListProps) => {
    const pizzaCards = pizzas.map((pizza) => (
        <PizzaCard
            key={pizza.id}
            togglePizza={togglePizza}
            pizza={pizza}
            isSelected={selectedPizzas.indexOf(pizza.id) !== -1}
        />
    ))

    return <div className={s.list}>{pizzaCards}</div>
}

export default PizzaList
