import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { IOrderPageState } from '../types/orderPageIntarfaces'
import orderReducer from './reducers/order/reducer'
import selectReducer from './reducers/select/reducer'
import { ISelectPageState } from './reducers/select/types'

export interface IState {
    selectPage: ISelectPageState
    orderPage: IOrderPageState
}

const rootReducer = combineReducers({
    selectPage: selectReducer,
    orderPage: orderReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
// window.store = store


export type StoreType = typeof store
export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export default store
