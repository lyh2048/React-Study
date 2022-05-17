import React, {useEffect, useState} from "react"
import IndexRouter from "./router/IndexRouter"
import TabBar from "./components/TabBar"
import './views/css/App.css'
import store from './redux/store'


export default function App() {
    const [showState, setShowState] = useState(store.getState().show)
    useEffect(() => {
        store.subscribe(() => {
            console.log('在App中订阅')
            console.log(store.getState())
            setShowState(store.getState().show)
        })
    }, [])
    return (
        <div>
            <IndexRouter>
                {showState && <TabBar />}
            </IndexRouter>
        </div>
    )
}