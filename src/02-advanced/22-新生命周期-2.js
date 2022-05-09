import React, { Component } from "react"

export default class App extends Component {
    state = {
        text: 'test'
    }
    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => this.setState({
                    text: 'test1'
                })}>
                    click
                </button>
                App-{this.state.text}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        console.log(snapshot)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return 100
    }
}