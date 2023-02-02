import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { IFormValues } from '@components/OrderForm/types'
import OrderPizza from './OrderPizza'
import {
    decreasePizzaQuantity,
    increasePizzaQuantity,
    removePizzaOrder,
    sendPizzaOrder
} from '@redux/reducers/order/actions'
import { getSinglePizza } from '@redux/reducers/select/actions'
import { StateType } from '@redux/store'
import { IAction, IPizzaOrder } from '@mainTypes/types'

const mapStateToProps = (state: StateType) => ({
    selectedPizzas: state.selectPage.selectedPizzas,
    orderedPizzas: state.orderPage.orderedPizzas,
    success: state.orderPage.success
})

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, void, IAction>) => ({
    callbacks: {
        getSinglePizza: (id: number) => dispatch(getSinglePizza(id)),
        increaseQuantity: (id: number) => dispatch(increasePizzaQuantity(id)),
        decreaseQuantity: (id: number) => dispatch(decreasePizzaQuantity(id)),
        removePizzaOrder: (id: number) => dispatch(removePizzaOrder(id)),
        createOrder: (form: IFormValues, pizzas: IPizzaOrder[]) => dispatch(sendPizzaOrder(form, pizzas))
    }
})

const OrderPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPizza)

export default OrderPizzaContainer
