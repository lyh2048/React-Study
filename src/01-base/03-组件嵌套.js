import React, { Component } from "react"

class NavBar extends Component {
    render() {
        return <div>NavBar</div>
    }
}

function Swiper() {
    return <div>Swiper</div>
}

const TabBar = () => <div>TabBar</div>

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <NavBar/>
                <Swiper/>
                <TabBar/>
            </div>
        )
    }
}