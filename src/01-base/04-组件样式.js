import React, { Component } from "react"
import './css/01-index.css' // 导入css模块，webpack支持

export default class App extends Component {
    render() {
        const styleObject = {
            background: "yellow",
            fontSize: "24px"
        }
        return (
            <div>
                {10 + 40}
                <div style={styleObject}>样式一</div>
                <div style={{background: "red"}}>样式二</div>
                <div className="active">样式三</div>
                <label htmlFor="username">用户名：</label>
                <input id="username" type="text" />
            </div>
        )
    }
}