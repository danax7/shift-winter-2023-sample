import { GET_PIZZAS, SET_PIZZA_LOADED } from "../actionTypes"

// export interface ISelectState {
// 	pizzas: IPizza[]
// }

const initialState = {
	pizzas: [],
	categories: ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'],
	currentCategory: 'Рекомендуем',
	pizzasLoaded: false
}

const selectReducer = (state = initialState, action) => {

	switch (action.type) {
		case GET_PIZZAS:

			return {
				...state,
				pizzas: action.payload
			}
		case SET_PIZZA_LOADED:

			return {
				...state,
				pizzasLoaded: true
			}

		default:
			return state
	}
}


export default selectReducer