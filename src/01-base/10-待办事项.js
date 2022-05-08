import React, { Component } from "react"
import './css/01-index.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['吃饭', '睡觉']
        }
        this.textRef = React.createRef()
    }

    render() {
        return (
            <div>
                <h1>待办事项</h1>
                <input ref={this.textRef} />
                <button onClick={() => this.handleAdd()}>添加</button>
                <ul>
                    {
                        this.state.list.map((item, index) => <li key={index + '-' + item}>
                            {item}
                            <button onClick={() => this.handleDelete(index)}>删除</button>
                        </li>)
                    }
                </ul>
                {this.state.list.length === 0 ? <div>暂无待办事项</div> : null}
                {this.state.list.length === 0 && <div>暂无待办事项</div>}
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事项</div>
            </div>
        )
    }

    handleAdd() {
        this.setState({
            list: [...this.state.list, this.textRef.current.value]
        })
        this.textRef.current.value = ""
    }

    handleDelete(index) {
        let newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
}