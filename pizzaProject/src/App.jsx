import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import s from './styles/App.module.css'
import back from './assets/back2.svg'
import SelectPizza from './components/SelectPizza/SelectPizza'
import OrderPizza from './components/OrderPizza/OrderPizza'
import SelectPizzaContainer from './components/SelectPizza/SelectPizzaContainer'

function App() {

	return (
		<div className={s.App} style={{
			backgroundImage: `url(${back})`
		}}>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/select" element={<SelectPizzaContainer />} />
					<Route path="/order" element={<OrderPizza />} />
				</Routes>
			</BrowserRouter>
		</div >
	)
}

export default App
