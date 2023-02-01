import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { IAction } from '../../modulesTs/generealInterfaces'
import { IOrderPizzaDispatchProps, IPizzaOrder, IValues } from '../../modulesTs/orderPageIntarfaces'
import { decreasePizzaQuantity, getSinglePizza, increasePizzaQuantity, removePizzaOrder, sendPizzaOrder } from '../../redux/actions'
import { IState, stateType } from '../../redux/store'
import OrderPizza from './OrderPizza'


const mapStateToProps = (state: IState) => {
	return {
		selectedPizzas: state.selectPage.selectedPizzas,
		orderedPizzas: state.orderPage.orderedPizzas,
		success: state.orderPage.success
	}
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

export interface IOrderPizzaProps {
	selectedPizzas: number[],
	orderedPizzas: IPizzaOrder[],
	callbacks: IOrderPizzaDispatchProps,
	success: boolean,
}

const OrderPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPizza)

export default OrderPizzaContainer