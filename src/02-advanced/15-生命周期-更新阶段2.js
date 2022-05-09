import React, { Component } from "react"

export default class App extends Component {
    state = {
        name: 'tom'
    }
    render() {
        console.log("render")
        return (
            <div>
                App
                <h2>{this.state.name}</h2>
                <button onClick={() => this.setState({
                    name: 'sam'
                })}>click</button>
            </div>
        )
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // return this.state.name !== nextState.name
        return JSON.stringify(this.state) !== JSON.stringify(nextState)
    }
}