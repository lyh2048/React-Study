import React, { Component } from "react"
import './css/normalize.css'

export default class App extends Component {
    state = {
        list: [
            '邮件1',
            '邮件2',
            '邮件3',
            '邮件4',
            '邮件5',
            '邮件6',
            '邮件7',
            '邮件8',
            '邮件9',
            '邮件10',
            '邮件11',
            '邮件12',
            '邮件13',
            '邮件14',
            '邮件15',
        ]
    }

    boxRef = React.createRef()

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 获取容器高度
        console.log(this.boxRef.current.scrollHeight)
        console.log(this.boxRef.current.scrollTop)
        return [this.boxRef.current.scrollTop, this.boxRef.current.scrollHeight]
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 获取容器高度
        console.log(this.boxRef.current.scrollHeight)
        // 高度差
        const delta = this.boxRef.current.scrollHeight - snapshot[0] - snapshot[1]
        this.boxRef.current.scrollTop += delta
    }

    render() {
        return (
            <div>
                <h1>邮箱应用</h1>
                <div>
                    <button onClick={() => {
                        this.setState({
                            list: [...['邮件16','邮件17','邮件18','邮件19','邮件20'], ...this.state.list]
                        })
                    }}>
                        拉取邮件
                    </button>
                </div>
                <div style={{height: '200px', overflow: 'auto'}} id={"box"} ref={this.boxRef}>
                    <ul>
                        {
                            this.state.list.map((item, index) => <li
                                style={{height: '50px', background: 'red'}}
                                key={index}>
                                {item}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}