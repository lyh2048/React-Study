import React, {useState} from "react"

export default function App() {
    const [name, setName] = useState("张三")
    return (
        <div>
            App-{name}
            <div>
                <button onClick={() => setName("李四")}>click</button>
            </div>
        </div>
    )
}