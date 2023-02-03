import { IPizzaOrder } from 'src/utils/mainTypes/types'
import { IOrderPizzaDispatchProps } from '@components/OrderPizza/types'

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
