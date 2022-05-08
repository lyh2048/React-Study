import React, {Component} from "react"

export default class App extends Component {
    a = 100
    render() {
        return (
            <div>
                App
                <input/>
                <button onClick={() => {console.log('click1', 'a=', this.a)}}>Btn1</button>
                <button onClick={this.handleClick2.bind(this)}>Btn2</button>
                <button onClick={this.handleClick3}>Btn3</button>
                <button onClick={() => {this.handleClick4()}}>Btn4</button>
            </div>
        )
    }

    handleClick2() {
        console.log('click2', 'a=', this.a)
    }

    handleClick3 = () => {
        console.log('click3', 'a=', this.a)
    }

    handleClick4 = () => {
        console.log('click4', 'a=', this.a)
    }
}