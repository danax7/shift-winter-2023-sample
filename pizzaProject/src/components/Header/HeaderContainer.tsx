import { connect } from 'react-redux'
import HeaderComponent from './Header'

export interface IStateHeaderProps {
	orderQuantity: number
}

const mapStateToProps = (state: any): IStateHeaderProps => {
	return {
		orderQuantity: state.selectPage.selectedPizzas.length
	}
}


const HeaderContainer = connect(mapStateToProps)(HeaderComponent)

export default HeaderContainer