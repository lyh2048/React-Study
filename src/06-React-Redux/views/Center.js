import React from "react"

export default function Center(props) {
    return (
        <div>
            Center
            <button onClick={() => {
                props.history.push('/filmOrder')
            }
            }>电影订单</button>
        </div>
    )
}