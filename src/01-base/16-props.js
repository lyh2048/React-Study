import React, { Component } from "react"
import NavBar from "./NavBar"

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <NavBar title="首页" leftShow={true} />
                </div>
                <div>
                    <h2>列表</h2>
                    <NavBar title="列表" leftShow={false} />
                </div>
                <div>
                    <h2>购物车</h2>
                    <NavBar title="购物车" leftShow={false} />
                </div>
            </div>
        )
    }
}