import React, { Component } from "react"

export default class App extends Component {
    componentWillMount() {
        console.log("will mount")
    }

    componentDidMount() {
        console.log("did mount")
    }

    render() {
        console.log("render")
        return (
            <div>App</div>
        )
    }
}