import { connect } from 'react-redux'
import { decreasePizzaQuantity, getSinglePizza, increasePizzaQuantity, removePizzaOrder } from '../../redux/actions'
import OrderPizza from './OrderPizza'


const mapStateToProps = (state) => {
	return {
		selectedPizzas: state.selectPage.selectedPizzas,
		orderedPizzas: state.orderPage.orderedPizzas,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		callbacks: {
			getSinglePizza: (id) => dispatch(getSinglePizza(id)),
			increaseQuantity: (id) => dispatch(increasePizzaQuantity(id)),
			decreaseQuantity: (id) => dispatch(decreasePizzaQuantity(id)),
			removePizzaOrder: (id) => dispatch(removePizzaOrder(id))
		}
	}
}

const OrderPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPizza)

export default OrderPizzaContainer