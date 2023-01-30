import { connect } from 'react-redux'
import { getPizzas, togglePizza } from '../../redux/actions'
import SelectPizza from './SelectPizza'



const mapStateToProps = (state) => {
	return {
		pizzas: state.selectPage.pizzas,
		categories: state.selectPage.categories,
		currentCategory: state.selectPage.currentCategory,
		isLoaded: state.selectPage.pizzasLoaded,
		errorLoading: state.selectPage.errorLoading,
		selectedPizzas: state.selectPage.selectedPizzas,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPizzas: () => dispatch(getPizzas()),
		togglePizza: (id) => dispatch(togglePizza(id))
	}
}


const SelectPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(SelectPizza)


export default SelectPizzaContainer