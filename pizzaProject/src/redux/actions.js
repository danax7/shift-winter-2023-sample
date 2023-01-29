import { GET_PIZZAS, SET_PIZZA_LOADED } from "./actionTypes"

// export interface IAction<T> {
// 	type: string,
// 	payload?: T
// }

// export type AsyncAction = (dispatch: (action: IAction<IPizza[]>) => any) => void;

export const getPizzas = () => {

	return (dispatch) => {

		fetch('https://shift-winter-2023-backend.onrender.com/api/pizza')
			.then(raw => raw.json())
			.then(pizza => {
				dispatch({ type: GET_PIZZAS, payload: pizza })
			})
			.finally(() => dispatch({ type: SET_PIZZA_LOADED }))
	}
}
