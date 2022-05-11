import React, {useRef, useState} from "react"

export default function App() {
    const [count, setCount] = useState(0)

    let cnt = useRef(0)

    return (
        <div>
            App-{count}-{cnt.current}
            <div>
                <button onClick={() => {
                    setCount(count + 1)
                    cnt.current++
                }}>+1</button>
            </div>
        </div>
    )
}