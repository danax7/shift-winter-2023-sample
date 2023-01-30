import { connect } from "react-redux";
import HeaderComponent from "./Header";

const mapStateToProps = (state) => {
	return {
		orderQuantity: state.selectPage.selectedPizzas.length
	}
}


const HeaderContainer = connect(mapStateToProps)(HeaderComponent)

export default HeaderContainer