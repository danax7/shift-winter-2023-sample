import { connect } from 'react-redux'
import { IState } from '../../redux/store'
import HeaderComponent from './Header'

export interface IStateHeaderProps {
	orderQuantity: number
}

const mapStateToProps = (state: IState): IStateHeaderProps => {
	return {
		orderQuantity: state.selectPage.selectedPizzas.length
	}
}


const HeaderContainer = connect(mapStateToProps)(HeaderComponent)

export default HeaderContainer