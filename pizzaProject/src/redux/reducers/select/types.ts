import { IPizza } from '@mainTypes/types'

export interface ISelectPageState {
    pizzas: IPizza[]
    categories: string[]
    currentCategory: string
    pizzasLoaded: boolean
    errorLoading: boolean
    selectedPizzas: number[]
}
