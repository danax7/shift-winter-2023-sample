import { IAction } from "../actions"
import { GET_PIZZAS, SET_ERROR_GET, SET_PIZZA_LOADED, TOGGLE_PIZZA } from "../actionTypes"
import { IPizza } from "../interfaces"

export interface ISelectState {
	pizzas: IPizza[],
	categories: string[],
	currentCategory: string,
	pizzasLoaded: boolean,
	errorLoading: boolean,
	selectedPizzas: number[]
}

const initialState = {
	pizzas: [],
	categories: ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'],
	currentCategory: 'Рекомендуем',
	pizzasLoaded: false,
	errorLoading: false,
	selectedPizzas: []
}

const selectReducer = (state = initialState, action: IAction) => {

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
			// if (state.selectedPizzas.indexOf(action.payload) !== -1) {
			// 	return {
			// 		...state,
			// 		selectedPizzas: state.selectedPizzas.filter(id => id !== action.payload)
			// 	}
			// }

			return {
				...state,
				selectedPizzas: [...state.selectedPizzas, action.payload]
			}

		default:
			return state
	}
}


export default selectReducer