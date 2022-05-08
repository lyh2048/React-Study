import React, { Component } from "react"
import './css/normalize.css'

export default class App extends Component {
    state = {
        current: 1
    }
    render() {
        const current = this.state.current
        return (
            <div>
                <NavBar meBtnClick={() => this.setState({current: 3})} />
                {current === 1 && <MessageComponent />}
                {current === 2 && <ContactComponent />}
                {current === 3 && <MeComponent />}
                <TabBar event={(index) => this.setState({current: index})} current={current} />
            </div>
        )
    }
}

class TabBar extends Component {
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
        current: this.props.current
    }
    render() {
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
        const current = this.state.current
        return (
            <div>
                <ul style={ulStyle}>
                    {
                        this.state.list.map(item => <li key={item.id}
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
        this.setState({
            current: index
        })
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
                <button style={{width: '75px'}}>返回</button>
                <span>导航栏</span>
                <button style={{width: '75px'}} onClick={() => this.props.meBtnClick()}>我的</button>
            </div>
        )
    }
}

function MessageComponent() {
    return <div>消息</div>
}

function ContactComponent() {
    return <div>联系人</div>
}

function MeComponent() {
    return <div>我的</div>
}