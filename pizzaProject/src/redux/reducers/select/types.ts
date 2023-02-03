import { IPizza } from 'src/utils/mainTypes/types'

export interface ISelectPageState {
    pizzas: IPizza[]
    categories: string[]
    currentCategory: string
    pizzasLoaded: boolean
    selectedPizzas: number[]
}
