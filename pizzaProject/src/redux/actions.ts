import { IValues } from "../components/OrderForm/formHelpers";
import { DECREASE_PIZZA_QUANTITY, GET_PIZZAS, INCREASE_PIZZA_QUANTITY, REMOVE_PIZZA_ORDER, SET_ERROR_GET, SET_PIZZA_LOADED, SET_SINGLE_PIZZA, SUCCESS_ORDER, TOGGLE_PIZZA } from "./actionTypes"
import { IPizzasOrder } from "./interfaces";
import { dispatchType } from "./store";

export interface IAction {
	type: string,
	payload?: any
}

// export type AsyncAction = (dispatch: (action: IAction) => any) => void;

// todo select page



// fetch all pizzas

export const setPizzas = (pizza: any) => ({
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
	return (dispatch: dispatchType) => {

		fetch('https://shift-winter-2023-backend.onrender.com/api/pizza')
			.then(raw => raw.json())
			.then(pizza => {
				dispatch(setPizzas(pizza))
			})
			.catch((err) => dispatch(setErrorGet()))
			.finally(() => dispatch(setLoaded()))
	}
}

//

export const togglePizza = (id: number) => ({
	type: TOGGLE_PIZZA,
	payload: id
})

//fetch single pizza ----------

export const setSinglePizza = (pizza: any) => ({
	type: SET_SINGLE_PIZZA,
	payload: pizza
})

export const getSinglePizza = (id: number) => {

	return (dispatch: dispatchType) => {
		fetch(`https://shift-winter-2023-backend.onrender.com/api/pizza/${id}`)
			.then(raw => raw.json())
			.then(pizza => {
				dispatch(setSinglePizza(pizza))
			})
	}
}


// todo order page


export const increasePizzaQuantity = (id: number) => ({
	type: INCREASE_PIZZA_QUANTITY,
	payload: id
})

export const decreasePizzaQuantity = (id: number) => ({
	type: DECREASE_PIZZA_QUANTITY,
	payload: id
})

export const removePizzaOrder = (id: number) => ({
	type: REMOVE_PIZZA_ORDER,
	payload: id
})

export const successOrder = () => ({
	type: SUCCESS_ORDER
})


export const sendPizzaOrder = (form: IValues, pizzas: IPizzasOrder[]) => {

	const formData = {
		user: {
			firstname: form.firstname,
			lastname: form.lastname,
			phoneNumber: form.phoneNumber,
			birthDate: form.birthDate,
			registrationAddress: ''
		},
		address: {
			city: form.city,
			street: form.street,
			house: form.house,
			apartment: form.apartment,
			comment: form.comment
		}
	}

	const pizzasData = pizzas.map((card: IPizzasOrder) => card.pizza)

	return (dispatch: dispatchType) => {
		fetch(`https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder`, {
			method: 'post',
			body: JSON.stringify({ pizzas: pizzasData, details: formData }),
			headers: {
				'content-type': 'application/json'
			}
		})
			.catch(err => dispatch({ type: '__ERROR__' }))
			.finally(() => dispatch(successOrder()))
	}
}