import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import s from './styles/App.module.css'
import back from './assets/back2.svg'
import SelectPizza from './components/SelectPizza/SelectPizza'
import OrderPizza from './components/OrderPizza/OrderPizza'

function App() {

	return (
		<div className={s.App} style={{
			backgroundImage: `url(${back})`
		}}>
			<div className="box">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/select" element={<SelectPizza />} />
						<Route path="/order" element={<OrderPizza />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div >
	)
}

export default App
