import React, { Component } from "react"

class NavBar extends Component {
    render() {
        return (
            <div style={{background: 'red'}}>
                <span>NavBar</span>
                <button onClick={() => this.props.event()}>click</button>
            </div>
        )
    }
}

class SideBar extends Component {
    render() {
        return (
            <div style={{background: 'yellow', width: '100px'}}>
                <ul>
                    <li>选项1</li>
                    <li>选项2</li>
                    <li>选项3</li>
                    <li>选项4</li>
                    <li>选项5</li>
                </ul>
            </div>
        )
    }
}


export default class App extends Component {
    state = {
        isShow: false
    }
    render() {
        return (
            <div>
                App
                <NavBar event={() => this.setState({isShow: !this.state.isShow})} />
                {this.state.isShow && <SideBar />}
            </div>
        )
    }
}

// 父传子：属性
// 子传父：回调函数