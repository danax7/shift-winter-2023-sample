import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => {
	return {
		orderQuantity: state.selectPage.selectedPizzas.length
	}
}


const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer