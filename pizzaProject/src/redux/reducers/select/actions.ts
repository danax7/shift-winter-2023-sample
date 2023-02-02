import { GET_PIZZAS, SET_ERROR_GET, SET_PIZZA_LOADED, SET_SINGLE_PIZZA, TOGGLE_PIZZA } from './actionTypes'
import { DispatchType } from '@redux/store'
import { IPizza } from '@mainTypes/types'

export const setPizzas = (pizza: IPizza) => ({
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
    return (dispatch: DispatchType) => {
        fetch('https://shift-winter-2023-backend.onrender.com/api/pizza')
            .then((raw) => raw.json())
            .then((pizza: IPizza) => {
                dispatch(setPizzas(pizza))
            })
            .catch(() => dispatch(setErrorGet()))
            .finally(() => dispatch(setLoaded()))
    }
}

export const togglePizza = (id: number) => ({
    type: TOGGLE_PIZZA,
    payload: id
})

export const setSinglePizza = (pizza: IPizza) => ({
    type: SET_SINGLE_PIZZA,
    payload: pizza
})

export const getSinglePizza = (id: number) => {
    return (dispatch: DispatchType) => {
        fetch(`https://shift-winter-2023-backend.onrender.com/api/pizza/${id}`)
            .then((raw) => raw.json())
            .then((pizza: IPizza) => {
                dispatch(setSinglePizza(pizza))
            })
    }
}
