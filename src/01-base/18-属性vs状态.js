import React, { Component } from "react"

class Child extends Component {
    render() {
        return (
            <div>
                Child-{this.props.text}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        childText: 'text'
    }
    render() {
        return (
            <div>
                App
                <button onClick={() => this.setState({childText: 'newText'})}>click me!</button>
                <Child text={this.state.childText} />
            </div>
        )
    }
}