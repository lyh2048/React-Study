import React from "react"

export default function Login(props) {
    return (
        <div>
            登录页面
            <button onClick={() => {
                localStorage.setItem("token", "test")
                props.history.push('/center')
            }
            }>
                登录
            </button>
        </div>
    )
}