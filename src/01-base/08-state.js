import React, { Component } from "react"

export default class App extends Component {
    state = {
        flag: true
    }

    render() {
        return (
            <div>
                <h1>React</h1>
                <button onClick={() => this.handleClick()}>{this.state.flag ? '收藏' : '取消'}</button>
            </div>
        )
    }

    handleClick() {
        this.setState({
            flag: !this.state.flag
        })
    }
}