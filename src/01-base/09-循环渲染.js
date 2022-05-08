import React, { Component } from "react"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['item1', 'item2', 'item3']
        }
    }
    render() {
        return (
            <div>
                App
                <ul>
                    {
                        this.state.list.map((item, index) => <li key={item + '-' + index}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}