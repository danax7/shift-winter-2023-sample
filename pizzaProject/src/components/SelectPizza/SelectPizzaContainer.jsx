import { connect } from "react-redux";
import { getPizzas } from "../../redux/actions";
import SelectPizza from "./SelectPizza";



const mapStateToProps = (state) => {
	return {
		pizzas: state.selectPage.pizzas
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPizzas: () => dispatch(getPizzas())
	}
}


const SelectPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(SelectPizza)


export default SelectPizzaContainer