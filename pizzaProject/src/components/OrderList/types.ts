import { IOrderPizzaDispatchProps } from '@components/OrderPizza/types'
import { IPizzaOrder } from '@mainTypes/types'

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
