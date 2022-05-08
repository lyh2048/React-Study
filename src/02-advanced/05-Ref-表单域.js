import React, { Component } from "react"
import './css/normalize.css'

class FormFieldComponent extends Component {
    state = {
        value: ''
    }

    clear() {
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', marginTop: '10px', marginBottom: '10px', alignItems: 'center'}}>
                <label style={{flex: '1', textAlign: 'justify', textAlignLast: 'justify', marginRight: '10px'}}>{this.props.text}</label>
                <input style={{flex: '3', height: '30px', lineHeight: '30px'}}
                       type={this.props.type}
                       value={this.state.value}
                       onChange={event => this.setState({value: event.target.value})} />
            </div>
        )
    }
}


export default class App extends Component {
    usernameFieldRef = React.createRef()
    passwordFieldRef = React.createRef()

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', margin: '10px'}}>登录页面</h1>
                <div style={{width: '50%', margin: '0 auto'}}>
                    <FormFieldComponent  text={"用户名"}
                                         ref={this.usernameFieldRef}
                                         type={"text"} />
                    <FormFieldComponent text={"密码"}
                                        ref={this.passwordFieldRef}
                                        type={"password"} />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button
                            style={{width: '75px', height: '30px'}}
                            onClick={() => this.handleLogin()}>登录</button>
                        <button
                            style={{width: '75px', height: '30px'}}
                            onClick={() => this.handleClear()}>清空</button>
                    </div>
                </div>
            </div>
        )
    }
    handleLogin() {
        const username = this.usernameFieldRef.current.state.value
        const password = this.passwordFieldRef.current.state.value
        console.log(`username: ${username}`)
        console.log(`password: ${password}`)
    }

    handleClear() {
        this.usernameFieldRef.current.clear()
        this.passwordFieldRef.current.clear()
    }
}
