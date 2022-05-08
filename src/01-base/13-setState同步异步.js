import React, {Component} from "react"

export default class App extends Component {
    state = {
        count: 1
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => this.handleAdd1()}>Add1</button>
            </div>
        )
    }

    handleAdd1() {
        this.setState({
            count: this.state.count + 1
        })

        this.setState({
            count: this.state.count + 1
        })

        this.setState({
            count: this.state.count + 1
        })
    }
}

// setState处在同步逻辑中，异步更新状态，更新真实DOM
// setState处在异步逻辑中，同步更新状态，同步更新真实DOM