import React from "react"
import IndexRouter from "./router/IndexRouter"
import TabBar from "./components/TabBar"
import './views/css/App.css'
import {connect} from 'react-redux'


function App(props) {
    return (
        <div>
            <IndexRouter>
                {props.isShow && <TabBar />}
            </IndexRouter>
        </div>
    )
}

export default connect((state) => {
    return {
        isShow: state.TabBarReducer.show
    }
})(App)