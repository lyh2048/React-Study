import React, { Component } from "react"
import BetterScroll from "better-scroll"
import './css/normalize.css'

export default class App extends Component {
    state = {
        list: ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"]
    }

    componentDidMount() {
        new BetterScroll(document.getElementById("wrapper"))
    }

    render() {
        return (
            <div>
                App
                <div id={"wrapper"} style={{height: '200px', background: 'yellow', overflow: 'hidden'}}>
                    <ul>
                        {
                            this.state.list.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}