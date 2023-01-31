import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { decreasePizzaQuantity, getSinglePizza, IAction, IForm, increasePizzaQuantity, removePizzaOrder, sendPizzaOrder } from '../../redux/actions'
import { IPizzaOrder } from '../../modulesTs/interfaces'
import { IState, stateType } from '../../redux/store'
import { IValues } from '../OrderForm/formHelpers'
import OrderPizza from './OrderPizza'


export interface IOrderPizzaStateProps {

}

const mapStateToProps = (state: IState) => {
	return {
		selectedPizzas: state.selectPage.selectedPizzas,
		orderedPizzas: state.orderPage.orderedPizzas,
		success: state.orderPage.success
	}
}

export interface IOrderPizzaDispatchProps {
	getSinglePizza: (id: number) => void,
	increaseQuantity: (id: number) => void,
	decreaseQuantity: (id: number) => void,
	removePizzaOrder: (id: number) => void,
	createOrder: (form: IValues, pizzas: IPizzaOrder[]) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<stateType, void, IAction>): { callbacks: IOrderPizzaDispatchProps } => {
	return {
		callbacks: {
			getSinglePizza: (id: number) => dispatch(getSinglePizza(id)),
			increaseQuantity: (id: number) => dispatch(increasePizzaQuantity(id)),
			decreaseQuantity: (id: number) => dispatch(decreasePizzaQuantity(id)),
			removePizzaOrder: (id: number) => dispatch(removePizzaOrder(id)),
			createOrder: (form: IValues, pizzas: IPizzaOrder[]) => dispatch(sendPizzaOrder(form, pizzas))
		}
	}
}

const OrderPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPizza)

export default OrderPizzaContainer