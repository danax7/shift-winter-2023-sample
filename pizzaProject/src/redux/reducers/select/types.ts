import { IPizza } from '../../../types/genereal'

export interface ISelectPageState {
    pizzas: IPizza[]
    categories: string[]
    currentCategory: string
    pizzasLoaded: boolean
    errorLoading: boolean
    selectedPizzas: number[]
}
