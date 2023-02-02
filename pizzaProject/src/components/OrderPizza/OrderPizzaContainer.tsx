import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { IAction, IPizzaOrder, IState } from '@mainTypes/types'
import {
    decreasePizzaQuantity,
    increasePizzaQuantity,
    removePizzaOrder,
    sendPizzaOrder
} from '@redux/reducers/order/actions'
import { getSinglePizza } from '@redux/reducers/select/actions'
import { StateType } from '@redux/store'

import { IFormValues } from '../OrderForm/types'
import OrderPizza from './OrderPizza'

const mapStateToProps = (state: IState) => {
    return {
        selectedPizzas: state.selectPage.selectedPizzas,
        orderedPizzas: state.orderPage.orderedPizzas,
        success: state.orderPage.success
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, void, IAction>) => {
    return {
        callbacks: {
            getSinglePizza: (id: number) => dispatch(getSinglePizza(id)),
            increaseQuantity: (id: number) => dispatch(increasePizzaQuantity(id)),
            decreaseQuantity: (id: number) => dispatch(decreasePizzaQuantity(id)),
            removePizzaOrder: (id: number) => dispatch(removePizzaOrder(id)),
            createOrder: (form: IFormValues, pizzas: IPizzaOrder[]) => dispatch(sendPizzaOrder(form, pizzas))
        }
    }
}

const OrderPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPizza)

export default OrderPizzaContainer
