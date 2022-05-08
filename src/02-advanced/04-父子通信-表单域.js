import React, { Component } from "react"
import './css/normalize.css'

export default class App extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', margin: '10px'}}>登录页面</h1>
                <div style={{width: '50%', margin: '0 auto'}}>
                    <FormFieldComponent  text={"用户名"}
                                         type={"text"}
                                         value={this.state.username}
                                         onChangeEvent={(value) => this.setState({username: value})} />
                    <FormFieldComponent text={"密码"}
                                        type={"password"}
                                        value={this.state.password}
                                        onChangeEvent={(value) => this.setState({password: value})} />
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
        const { username, password } = this.state
        console.log(`username: ${username}`)
        console.log(`password: ${password}`)
    }

    handleClear() {
        this.setState({
            username: '',
            password: ''
        })
    }
}

class FormFieldComponent extends Component {
    render() {
        return (
            <div style={{width: '100%', display: 'flex', marginTop: '10px', marginBottom: '10px', alignItems: 'center'}}>
                <label style={{flex: '1', textAlign: 'justify', textAlignLast: 'justify', marginRight: '10px'}}>{this.props.text}</label>
                <input style={{flex: '3', height: '30px', lineHeight: '30px'}}
                       type={this.props.type}
                       value={this.props.value}
                       onChange={event => this.props.onChangeEvent(event.target.value)} />
            </div>
        )
    }
}