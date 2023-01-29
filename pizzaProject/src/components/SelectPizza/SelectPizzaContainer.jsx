import { connect } from "react-redux";
import { getPizzas } from "../../redux/actions";
import SelectPizza from "./SelectPizza";



const mapStateToProps = (state) => {
	return {
		pizzas: state.selectPage.pizzas,
		categories: state.selectPage.categories,
		currentCategory: state.selectPage.currentCategory,
		isLoaded: state.selectPage.pizzasLoaded
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPizzas: () => dispatch(getPizzas())
	}
}


const SelectPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(SelectPizza)


export default SelectPizzaContainer