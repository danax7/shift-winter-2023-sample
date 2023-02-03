import { IPizzaOrder } from 'src/utils/mainTypes/types'
import { IOrderFormValues } from '@components/OrderForm/types'

export interface IOrderPizzaDispatchProps {
    getSinglePizza: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removePizzaOrder: (id: number) => void
    createOrder: (form: IOrderFormValues, pizzas: IPizzaOrder[]) => void
}

export interface IOrderPizzaProps {
    selectedPizzas: number[]
    orderedPizzas: IPizzaOrder[]
    callbacks: IOrderPizzaDispatchProps
    success: boolean
}
