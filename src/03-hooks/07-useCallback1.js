import React, {useState} from "react"
import './css/normalize.css'


export default function App() {

    const [count, setCount] = useState(0)
    // useState 记忆函数
    // useCallback 防止因为组件重新渲染，导致方法被重新创建，起到缓存作用
    let cnt = 0
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>App-计数器</h2>
            <div>
                <button onClick={() => {
                    setCount(count + 1)
                    cnt += 1
                }} style={{width: '100px', height: '50px', margin: '20px'}}>+1</button>
                <span style={{marginLeft: '10px', height: '50px', lineHeight: '50px'}}>{count}-{cnt}</span>
            </div>
        </div>
    )
}