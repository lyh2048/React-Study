import React from "react"
import IndexRouter from "./router/IndexRouter"
import TabBar from "./components/TabBar"
import './views/css/App.css'


export default function App() {
    return (
        <div>
            <IndexRouter>
                <TabBar />
            </IndexRouter>
        </div>
    )
}