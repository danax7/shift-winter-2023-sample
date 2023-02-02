import { IOrderPizzaDispatchProps, IPizzaOrder } from '../../types/orderPageIntarfaces'
import OrderPizzaCard from './OrderPizzaCard'

interface IOrderListProps {
    pizzas: IPizzaOrder[],
    success: boolean,
    callbacks: IOrderPizzaDispatchProps
}


const OrderList = ({ pizzas, success, callbacks }: IOrderListProps) => {

    const pizzasList = pizzas.map(card =>
        <OrderPizzaCard key={card.pizza.id} success={success} callbacks={callbacks} pizzaCard={card} />)

    return (
        <div>
            {pizzasList}
        </div>
    )
}

export default OrderList