import React, { Component } from "react"

export default class App extends Component {
    state = {
        text: '',
        list: [
            {
                name: '吃饭',
                isChecked: false
            },
            {
                name: '睡觉',
                isChecked: false
            }
        ]
    }

    handleAdd() {
        const item = {
            name: this.state.text,
            isChecked: false
        }
        this.setState({
            list: [...this.state.list, item]
        })
    }

    handleDel(index) {
        const newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }

    handleCheck(index) {
        const newList = [...this.state.list]
        newList[index].isChecked = !newList[index].isChecked
        this.setState({
            list: newList
        })
    }

    render() {
        return (
            <div>
                <h1>待办事项</h1>
                <input type="text"
                       value={this.state.text}
                       onChange={(evt) => this.setState({text: evt.target.value})}/>
                <button onClick={() => this.handleAdd()}>添加</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.name + '-' + index}>
                                <input type="checkbox" value={item.isChecked} onChange={() => this.handleCheck(index)}/>
                                <span style={{textDecoration: item.isChecked ? "line-through" : ""}}>{item.name}</span>
                                <button onClick={() => this.handleDel(index)}>删除</button>
                            </li>)
                    }
                    {this.state.list.length === 0 && <div>暂无待办事项</div>}
                </ul>
            </div>
        )
    }
}