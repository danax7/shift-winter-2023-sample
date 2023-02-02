import { IPizzaOrder } from '@mainTypes/types'
import { IOrderPizzaDispatchProps } from '../OrderPizza/types'

export interface IOrderListProps {
    pizzas: IPizzaOrder[]
    success: boolean
    callbacks: IOrderPizzaDispatchProps
}

export interface IOrderPizzaCardProps {
    pizzaCard: IPizzaOrder
    success: boolean
    callbacks: IOrderPizzaDispatchProps
}
