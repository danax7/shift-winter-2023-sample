import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import selectReducer from "./reducers/selectReducer";


// export interface IState {
// 	selectPage: ISelectState
// }

const rootReducer = combineReducers({
	selectPage: selectReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store
export default store;

// export const dispatchType = typeof store.dispatch
