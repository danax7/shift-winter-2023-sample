import { DECREASE_PIZZA_QUANTITY, INCREASE_PIZZA_QUANTITY, REMOVE_PIZZA_ORDER, SUCCESS_ORDER } from './actionTypes'
import { IOrderPageState } from './types'
import { IAction } from '@mainTypes/types'
import { SET_SINGLE_PIZZA } from '../select/actionTypes'

const initialState: IOrderPageState = {
    orderedPizzas: [],
    success: false
}

const orderReducer = (state = initialState, action: IAction): IOrderPageState => {
    switch (action.type) {
        case SET_SINGLE_PIZZA:
            const pizzaPrice = action.payload?.price.default

            return {
                ...state,
                orderedPizzas: [...state.orderedPizzas, { pizza: action.payload, quantity: 1, price: pizzaPrice }]
            }

        case INCREASE_PIZZA_QUANTITY:
            const increasedOrder = state.orderedPizzas.map((card) => {
                if (card.pizza.id === action.payload) {
                    return { ...card, quantity: card.quantity + 1, price: card.price + card.pizza.price.default }
                }
                return card
            })

            return {
                ...state,
                orderedPizzas: increasedOrder
            }

        case DECREASE_PIZZA_QUANTITY:
            const decreasedOrder = state.orderedPizzas.map((card) => {
                if (card.pizza.id === action.payload && card.quantity > 1) {
                    return { ...card, quantity: card.quantity - 1, price: card.price - card.pizza.price.default }
                }
                return card
            })

            return {
                ...state,
                orderedPizzas: decreasedOrder
            }

        case REMOVE_PIZZA_ORDER:
            return {
                ...state,
                orderedPizzas: state.orderedPizzas.filter((card) => card.pizza.id !== action.payload)
            }

        case SUCCESS_ORDER:
            return {
                ...state,
                success: true
            }

        default:
            return state
    }
}

export default orderReducer
