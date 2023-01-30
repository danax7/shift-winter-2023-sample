import { connect } from 'react-redux'
import { getSinglePizza } from '../../redux/actions'
import OrderPizza from './OrderPizza'


const mapStateToProps = (state) => {
	return {
		selectedPizzas: state.selectPage.selectedPizzas,
		orderedPizzas: state.orderPage.orderedPizzas,
		price: state.orderPage.price,
		quantity: state.orderPage.pizzaQuantity
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSinglePizza: (id) => dispatch(getSinglePizza(id))
	}
}

const OrderPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPizza)

export default OrderPizzaContainer