import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { IAction } from '../../modulesTs/generealInterfaces'
import { getPizzas, togglePizza } from '../../redux/actions'
import { IState, stateType } from '../../redux/store'
import SelectPizza from './SelectPizza'


const mapStateToProps = (state: IState) => {
	return {
		pizzas: state.selectPage.pizzas,
		categories: state.selectPage.categories,
		currentCategory: state.selectPage.currentCategory,
		isLoaded: state.selectPage.pizzasLoaded,
		errorLoading: state.selectPage.errorLoading,
		selectedPizzas: state.selectPage.selectedPizzas,
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<stateType, void, IAction>) => {
	return {
		getPizzas: () => dispatch(getPizzas()),
		togglePizza: (id: number) => dispatch(togglePizza(id))
	}
}


const SelectPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(SelectPizza)


export default SelectPizzaContainer