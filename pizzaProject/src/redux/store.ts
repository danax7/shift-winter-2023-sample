import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import orderReducer, { IOrderState } from "./reducers/orderReducer";
import selectReducer, { ISelectState } from "./reducers/selectReducer";


export interface IState {
	selectPage: ISelectState,
	orderPage: IOrderState
}

const rootReducer = combineReducers({
	selectPage: selectReducer,
	orderPage: orderReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

// window.store = store
export default store;


export type storeType = typeof store
export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch



// export const dispatchType = typeof store.dispatch
