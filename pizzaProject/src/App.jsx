import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import s from './assets/styles/App.module.css'
import back from './assets/back2.svg'
import SelectPizzaContainer from './components/SelectPizza/SelectPizzaContainer'
import OrderPizzaContainer from './components/OrderPizza/OrderPizzaContainer'

function App() {

	return (
		<div className={s.App} style={{
			backgroundImage: `url(${back})`
		}}>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/select" element={<SelectPizzaContainer />} />
					<Route path="/order" element={<OrderPizzaContainer />} />
				</Routes>
			</BrowserRouter>
		</div >
	)
}

export default App
