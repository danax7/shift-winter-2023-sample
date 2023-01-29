import { GET_PIZZAS } from "../actionTypes"

// export interface ISelectState {
// 	pizzas: IPizza[]
// }

const initialState = {
	pizzas: [],
	categories: ['Рекомендуем', 'Без мяса', 'Сладкая', 'Акции', 'Напитки'],
	currentCategory: 'Рекомендуем'
}

const selectReducer = (state = initialState, action) => {

	switch (action.type) {
		case GET_PIZZAS:

			return {
				...state,
				pizzas: action.payload
			}

		default:
			return state
	}
}


export default selectReducer