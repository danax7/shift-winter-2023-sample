import { IPizza } from '../../types/genereal'

export interface ISelectPizzaProps {
    pizzas: IPizza[]
    getPizzas: () => void
    togglePizza: (id: number) => void
    categories: string[]
    currentCategory: string
    isLoaded: boolean
    errorLoading: boolean
    selectedPizzas: number[]
}
