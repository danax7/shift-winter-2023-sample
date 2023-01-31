import { DECREASE_PIZZA_QUANTITY, GET_PIZZAS, INCREASE_PIZZA_QUANTITY, REMOVE_PIZZA_ORDER, SET_ERROR_GET, SET_PIZZA_LOADED, SET_SINGLE_PIZZA, SUCCESS_ORDER, TOGGLE_PIZZA } from "./actionTypes"

// export interface IAction<T> {
// 	type: string,
// 	payload?: T
// }

// export type AsyncAction = (dispatch: (action: IAction<IPizza[]>) => any) => void;


// todo select page



// fetch all pizzas

export const setPizzas = (pizza) => ({
	type: GET_PIZZAS,
	payload: pizza
})

export const setLoaded = () => ({
	type: SET_PIZZA_LOADED
})

export const setErrorGet = () => ({
	type: SET_ERROR_GET
})

export const getPizzas = () => {
	return dispatch => {

		fetch('https://shift-winter-2023-backend.onrender.com/api/pizza')
			.then(raw => raw.json())
			.then(pizza => {
				dispatch(setPizzas(pizza))
			})
			.catch((err) => dispatch(setError(err)))
			.finally(() => dispatch(setLoaded()))
	}
}

//

export const togglePizza = (id) => ({
	type: TOGGLE_PIZZA,
	payload: id
})

//fetch single pizza ----------

export const setSinglePizza = (pizza) => ({
	type: SET_SINGLE_PIZZA,
	payload: pizza
})

export const getSinglePizza = (id) => {

	return dispatch => {
		fetch(`https://shift-winter-2023-backend.onrender.com/api/pizza/${id}`)
			.then(raw => raw.json())
			.then(pizza => {
				dispatch(setSinglePizza(pizza))
			})
	}
}


// todo order page


export const increasePizzaQuantity = (id) => ({
	type: INCREASE_PIZZA_QUANTITY,
	payload: id
})

export const decreasePizzaQuantity = (id) => ({
	type: DECREASE_PIZZA_QUANTITY,
	payload: id
})

export const removePizzaOrder = (id) => ({
	type: REMOVE_PIZZA_ORDER,
	payload: id
})

export const createPizzaOrder = (form) => ({

})

export const successOrder = () => ({
	type: SUCCESS_ORDER
})


export const sendPizzaOrder = (form, pizzas) => {

	return dispatch => {
		fetch(`https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder`, {
			method: 'post',
			body: JSON.stringify({ pizzas: pizzas, details: form }),
			headers: {
				'content-type': 'application/json'
			}
		})
			.catch(err => dispatch({ type: '__ERROR__' }))
			.finally(() => dispatch(successOrder()))
	}
}