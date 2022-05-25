import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from 'redux'
import CityReducer from "./reducers/CityReducer"
import TabBarReducer from "./reducers/TabBarReducer"
import CinemaListReducer from "./reducers/CinemaListReducer"
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const reducer = combineReducers({
    CityReducer,
    TabBarReducer,
    CinemaListReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['CityReducer']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxThunk, reduxPromise)
))
let persistor = persistStore(store)

export {persistor, store}

// 纯函数
// 1. 对外界没有副作用
// 2. 同样的输入得到同样的输出