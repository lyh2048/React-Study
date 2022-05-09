import React, { Component } from "react"

export default class App extends Component {
    state = {
        name: 'tom'
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps")
        console.log(nextProps)
        console.log(nextState)
        const name = nextState.name
        return {
            name: name.substr(0, 1).toUpperCase() + name.substr(1)
        }
    }

    render() {
        return (
            <div>
                <div>App-{this.state.name}</div>
                <div>
                    <button onClick={() => this.setState({
                        name: 'sam'
                    })}>click</button>
                </div>
            </div>
        )
    }
}