import React, { Component } from "react"

export default class App extends Component {

    usernameRef = React.createRef()

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <input type="text" ref={this.usernameRef} defaultValue={"小明"} />
                <button onClick={() => {
                    console.log(this.usernameRef.current.value)
                }}>登录</button>
                <button onClick={() => {
                    this.usernameRef.current.value = ""
                }}>重置</button>
            </div>
        )
    }
}