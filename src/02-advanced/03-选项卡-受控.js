import React, { Component } from "react"
import './css/normalize.css'

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                name: '消息'
            },
            {
                id: 2,
                name: '联系人'
            },
            {
                id: 3,
                name: '我的'
            }
        ],
        current: 1
    }
    render() {
        const current = this.state.current
        const list = this.state.list
        return (
            <div>
                <NavBar meBtnClick={() => this.setState({current: 3})} />
                {current === 1 && <MessageComponent />}
                {current === 2 && <ContactComponent />}
                {current === 3 && <MeComponent />}
                <TabBar event={(index) => this.setState({current: index})} current={current} list={list} />
            </div>
        )
    }
}

class TabBar extends Component {
    render() {
        const current = this.props.current
        const list = this.props.list
        const ulStyle = {
            listStyle: 'none',
            display: 'flex',
            position: 'fixed',
            bottom: 0,
            left: 0,
            height: '50px',
            lineHeight: '50px',
            width: '100%',
            backgroundColor: '#fff'
        }
        const liBaseStyle = {
            flex: 1,
            textAlign: 'center'
        }
        const activeStyle = {
            color: 'red'
        }
        return (
            <div>
                <ul style={ulStyle}>
                    {
                        list.map(item => <li key={item.id}
                                                        onClick={() => this.handleClick(item.id)}
                                                        style={current === item.id ? {...liBaseStyle, ...activeStyle} : liBaseStyle}>
                            {item.name}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
    handleClick(index) {
        this.props.event(index)
    }
}

class NavBar extends Component {
    render() {
        const navStyle = {
            background: '#efefef',
            height: '50px',
            lineHeight: '50px',
            display: 'flex',
            justifyContent: 'space-between'
        }
        return (
            <div style={navStyle}>
                <button style={{width: '75px', background: '#efefef', border: 'none'}}>用户名</button>
                <span style={{fontWeight: 'bold', fontSize: '24px'}}>应用名称</span>
                <button style={{width: '75px', background: '#efefef', border: 'none'}} onClick={() => this.props.meBtnClick()}>我的</button>
            </div>
        )
    }
}

function MessageComponent() {
    return <div style={{textAlign: 'center', fontSize: '24px'}}>消息组件</div>
}

function ContactComponent() {
    return <div style={{textAlign: 'center', fontSize: '24px'}}>联系人组件</div>
}

function MeComponent() {
    return <div style={{textAlign: 'center', fontSize: '24px'}}>我的组件</div>
}