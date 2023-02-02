import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import OrderPizzaContainer from './components/OrderPizza/OrderPizzaContainer'
import SelectPizzaContainer from './components/SelectPizza/SelectPizzaContainer'
import back from '@assets/images/back.svg'

document.body.style.backgroundImage = `url(${back})`

const App = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/select" element={<SelectPizzaContainer />} />
                <Route path="/order" element={<OrderPizzaContainer />} />
            </Routes>
        </BrowserRouter>
    </div>
)

export default App
