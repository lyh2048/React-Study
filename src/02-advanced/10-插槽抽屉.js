import React, { Component } from "react"

class NavBar extends Component {
    render() {
        return (
            <div style={{background: 'red'}}>
                <span>NavBar</span>
                {this.props.children}
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
                <NavBar>
                    <button onClick={() => this.setState({
                        isShow: !this.state.isShow
                    })}>click</button>
                </NavBar>
                {this.state.isShow && <SideBar />}
            </div>
        )
    }
}