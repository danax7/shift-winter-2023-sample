import { connect } from 'react-redux'
import HeaderComponent from './Header'
import { IStateHeaderProps } from './types'
import { IState } from '@mainTypes/types'

const mapStateToProps = (state: IState): IStateHeaderProps => ({
    orderQuantity: state.selectPage.selectedPizzas.length
})

const HeaderContainer = connect(mapStateToProps)(HeaderComponent)

export default HeaderContainer
