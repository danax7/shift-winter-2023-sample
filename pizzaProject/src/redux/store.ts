import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { IOrderPageState } from "../modulesTs/orderPageIntarfaces";
import { ISelectPageState } from "../modulesTs/selectPageInterfaces";
import orderReducer from "./reducers/orderReducer";
import selectReducer from "./reducers/selectReducer";


// я специально здесь не использую хуки и всякие новомодные штуки
// потому что хочу более глубоко погрузится, чтобы понять как что работает
// а хуки обычно за собой скрывают какую-то реализацию, которую можно прописать самому
// но это муторно и поэтому это автоматизировали
// я хочу пройти по такому пути один раз, а потом с чистой совестью использовать всё, что есть

export interface IState {
	selectPage: ISelectPageState,
	orderPage: IOrderPageState
}

const rootReducer = combineReducers({
	selectPage: selectReducer,
	orderPage: orderReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store


export type storeType = typeof store
export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch


export default store