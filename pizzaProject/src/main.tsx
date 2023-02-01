import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.js'
import store from './redux/store'
import './assets/styles/index.css'
import './assets/styles/_zero.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>
)
