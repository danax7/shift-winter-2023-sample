import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import orderReducer from './reducers/order/reducer'
import selectReducer from './reducers/select/reducer'

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
