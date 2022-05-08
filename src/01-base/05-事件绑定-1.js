import React, {Component} from "react"

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <input/>
                <button onClick={() => console.log('click1')}>Btn1</button>
                <button onClick={this.handleClick2}>Btn2</button>
                <button onClick={this.handleClick3}>Btn3</button>
                <button onClick={() => {this.handleClick4()}}>Btn4</button>
            </div>
        )
    }

    handleClick2() {
        console.log('click2')
    }

    handleClick3 = () => {
        console.log('click3')
    }

    handleClick4 = () => {
        console.log('click4')
    }
}