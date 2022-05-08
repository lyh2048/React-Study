import React, { Component } from "react"

class Child extends Component {
    render() {
        return (
            <div>
                Child
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[2]}
                {this.props.children[3]}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <Child>
                    <div>test1</div>
                    <div>test2</div>
                    <div>test3</div>
                    <div>test4</div>
                </Child>
            </div>
        )
    }
}