import { IAction, IState } from '@mainTypes/types'
import { getPizzas, togglePizza } from '@redux/reducers/select/actions'
import { StateType } from '@redux/store'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import SelectPizza from './SelectPizza'

const mapStateToProps = (state: IState) => {
    return {
        pizzas: state.selectPage.pizzas,
        categories: state.selectPage.categories,
        currentCategory: state.selectPage.currentCategory,
        isLoaded: state.selectPage.pizzasLoaded,
        errorLoading: state.selectPage.errorLoading,
        selectedPizzas: state.selectPage.selectedPizzas
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, void, IAction>) => {
    return {
        getPizzas: () => dispatch(getPizzas()),
        togglePizza: (id: number) => dispatch(togglePizza(id))
    }
}

const SelectPizzaContainer = connect(mapStateToProps, mapDispatchToProps)(SelectPizza)

export default SelectPizzaContainer
