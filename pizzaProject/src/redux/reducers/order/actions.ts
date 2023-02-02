import { IFormValues } from '@components/OrderForm/types'
import { IPizzaOrder } from '@mainTypes/types'
import { DispatchType } from '@redux/store'
import { DECREASE_PIZZA_QUANTITY, INCREASE_PIZZA_QUANTITY, REMOVE_PIZZA_ORDER, SUCCESS_ORDER } from './actionTypes'
import { IBackPizzaOrder, IOrderForm } from './types'

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

export const sendPizzaOrder = (formValues: IFormValues, pizzas: IPizzaOrder[]) => {
    const formData: IOrderForm = {
        user: {
            firstname: formValues.firstname,
            lastname: formValues.lastname,
            birthDate: formValues.birthDate,
            registrationAddress: ''
        },
        address: {
            city: formValues.city,
            street: formValues.street,
            house: formValues.house,
            apartment: formValues.apartment,
            comment: formValues.comment
        }
    }

    const pizzasData: IBackPizzaOrder[] = pizzas.map((card: IPizzaOrder) => ({
        id: card.pizza.id,
        size: 'large',
        crust: ''
    }))

    return (dispatch: DispatchType) => {
        fetch(`https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder`, {
            method: 'post',
            body: JSON.stringify({ pizzas: pizzasData, details: formData }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .catch((err) => dispatch({ type: '__ERROR__' }))
            .finally(() => dispatch(successOrder()))
    }
}
