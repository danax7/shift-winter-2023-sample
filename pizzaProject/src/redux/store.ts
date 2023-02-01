import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import orderReducer, { IOrderPageState } from "./reducers/orderReducer";
import selectReducer, { ISelectState } from "./reducers/selectReducer";


export interface IState {
	selectPage: ISelectState,
	orderPage: IOrderPageState
}

const rootReducer = combineReducers({
	selectPage: selectReducer,
	orderPage: orderReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store
export default store


export type storeType = typeof store
export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch