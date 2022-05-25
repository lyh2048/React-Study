import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import CityReducer from "./reducers/CityReducer"
import TabBarReducer from "./reducers/TabBarReducer"
import CinemaListReducer from "./reducers/CinemaListReducer"
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'


const reducer = combineReducers({
    CityReducer,
    TabBarReducer,
    CinemaListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxThunk, reduxPromise)
))

export default store

// 纯函数
// 1. 对外界没有副作用
// 2. 同样的输入得到同样的输出