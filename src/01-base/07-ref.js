import React, {Component} from "react"

export default class App extends Component {
    a = 100
    textRef = React.createRef()

    render() {
        return (
            <div>
                App
                <input ref={this.textRef} />
                <button onClick={() => {
                    this.handleClick4()
                }}>Add
                </button>
            </div>
        )
    }

    handleClick4() {
        console.log('click4', 'a=', this.a)
        console.log(this.textRef.current)
        console.log(this.textRef.current.value)
    }
}