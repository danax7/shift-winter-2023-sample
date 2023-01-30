import { GET_PIZZAS, SET_ERROR_GET, SET_PIZZA_LOADED, SET_SINGLE_PIZZA, TOGGLE_PIZZA } from "./actionTypes"

// export interface IAction<T> {
// 	type: string,
// 	payload?: T
// }

// export type AsyncAction = (dispatch: (action: IAction<IPizza[]>) => any) => void;

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

export const togglePizza = (id) => ({
	type: TOGGLE_PIZZA,
	payload: id
})

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