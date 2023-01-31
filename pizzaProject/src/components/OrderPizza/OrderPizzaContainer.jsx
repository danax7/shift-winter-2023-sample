import { connect } from 'react-redux'
import { decreasePizzaQuantity, getSinglePizza, increasePizzaQuantity, removePizzaOrder, sendPizzaOrder } from '../../redux/actions'
import OrderPizza from './OrderPizza'


const mapStateToProps = (state) => {
	return {
		selectedPizzas: state.selectPage.selectedPizzas,
		orderedPizzas: state.orderPage.orderedPizzas,
		success: state.orderPage.success
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		callbacks: {
			getSinglePizza: (id) => dispatch(getSinglePizza(id)),
			increaseQuantity: (id) => dispatch(increasePizzaQuantity(id)),
			decreaseQuantity: (id) => dispatch(decreasePizzaQuantity(id)),
			removePizzaOrder: (id) => dispatch(removePizzaOrder(id)),
			createOrder: (form, pizzas) => dispatch(sendPizzaOrder(form, pizzas))
		}
	}
}

const OrderPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPizza)

export default OrderPizzaContainer