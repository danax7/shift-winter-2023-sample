import { Link } from 'react-router-dom'
import HeaderContainer from '../Header/HeaderContainer'
import s from './s.module.css'

const MainPage = () => (
    <div className="box">
        <div className={s.main}>
            <HeaderContainer />
            <div className={s.btn}>
                <Link to="select">Заказать</Link>
            </div>
        </div>
    </div>
)

export default MainPage
