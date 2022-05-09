import React, { Component } from "react"

class Child extends Component {
    state = {
        title: ''
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps")
        console.log(nextProps)
        console.log(this.props.text)
        this.setState({
            title: nextProps.text + "-sam"
        })
    }

    render() {
        return (
            <div>Child-{this.state.title}</div>
        )
    }
}

export default class App extends Component {
    state = {
        text: '11'
    }
    render() {
        return (
            <div>
                <h2>App</h2>
                <div>
                    {this.state.text}
                    <button onClick={() => this.setState({
                        text: '22'
                    })}>click</button>
                </div>
                <Child text={this.state.text} />
            </div>
        )
    }
}