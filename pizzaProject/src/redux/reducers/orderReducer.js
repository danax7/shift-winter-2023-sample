import { SET_SINGLE_PIZZA } from "../actionTypes";


const initialState = {
	orderedPizzas: [],
	price: 0,
	pizzaQuantity: 0
}

const orderReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_SINGLE_PIZZA:

			return {
				...state,
				orderedPizzas: [...state.orderedPizzas, { pizza: action.payload, quantity: 1 }]
			}

		default:
			return state
	}
}


export default orderReducer