import React, { Component } from "react"
import './css/normalize.css'

export default class App extends Component {
    state = {
        list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        current: 0
    }
    render() {
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>App</h2>
               <div style={{width: '50%', margin: '0 auto'}}>
                   <input type={"number"}
                          value={this.state.current}
                          style={{width: '100%'}}
                          onChange={(evt) => this.setState({
                       current: Number(evt.target.value)
                   })} />
               </div>
                <div style={{overflow: 'hidden'}}>
                    {
                        this.state.list.map((item, index) => <BoxComponent key={index} current={this.state.current} index={index} />)
                    }
                </div>
            </div>
        )
    }
}

class BoxComponent extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {current, index} = this.props
        return current === index || nextProps.current === nextProps.index
    }
    render() {
        console.log("render")
        const {current, index} = this.props
        const boxStyle = {
            width: '100px',
            height: '100px',
            border: current === index ? '1px solid red' : '1px solid gray',
            margin: '10px',
            float: 'left',
            textAlign: 'center'
        }
        return (
            <div style={boxStyle}>
                Box
            </div>
        )
    }
}