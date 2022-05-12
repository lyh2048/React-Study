import React from "react"
import IndexRouter from "./router/IndexRouter"
import TabBar from "./components/TabBar"

export default function App() {
    return (
        <div>
            {/*其他内容*/}
            <IndexRouter>
                <TabBar />
            </IndexRouter>
        </div>
    )
}