import React, {Component} from "react"
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list: []
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                <div className="wrapper" style={{height: '200px', background: 'yellow', overflow: 'hidden'}}>
                    <ul className="content">
                        {
                            this.state.list.map(item => <li key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }

    getData() {
        const list = []
        for (let i = 0; i < 1000; i++) {
            list.push(i)
        }
        this.setState({
            list: list
        }, () => {
            new BetterScroll(".wrapper")
        })
    }
}