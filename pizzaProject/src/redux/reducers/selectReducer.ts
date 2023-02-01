import { IAction } from "../../modulesTs/generealInterfaces"
import { IPizza } from "../../modulesTs/selectPageInterfaces"
import { GET_PIZZAS, SET_ERROR_GET, SET_PIZZA_LOADED, TOGGLE_PIZZA } from "../actionTypes"

export interface ISelectPageState {
	pizzas: IPizza[],
	categories: string[],
	currentCategory: string,
	pizzasLoaded: boolean,
	errorLoading: boolean,
	selectedPizzas: number[]
}

const initialState: ISelectPageState = {
	pizzas: [],
	categories: ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'],
	currentCategory: 'Рекомендуем',
	pizzasLoaded: false,
	errorLoading: false,
	selectedPizzas: []
}

const selectReducer = (state = initialState, action: IAction): ISelectPageState => {

	switch (action.type) {
		case GET_PIZZAS:

			return {
				...state,
				pizzas: action.payload
			}

		case SET_ERROR_GET:

			return {
				...state,
				errorLoading: true
			}

		case SET_PIZZA_LOADED:

			return {
				...state,
				pizzasLoaded: true
			}

		case TOGGLE_PIZZA:
			let duplicate: boolean = false

			state.selectedPizzas.forEach(id => {
				if (id === action.payload) {
					duplicate = true
				}
			})

			if (duplicate) {
				return {
					...state,
					selectedPizzas: state.selectedPizzas.filter(id => id !== action.payload)
				}
			}

			return {
				...state,
				selectedPizzas: [...state.selectedPizzas, action.payload]
			}

		default:
			return state
	}
}


export default selectReducer