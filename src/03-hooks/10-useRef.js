import React, {useRef, useState} from "react"

export default function App() {
    const [list, setList] = useState([])
    const textRef = useRef()

    const handleAddItem = () => {
        const text = textRef.current.value
        setList([...list, text])
        textRef.current.value = ''
    }

    const handleDelItem = (index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    return (
        <div>
            <h2>待办事项</h2>
            <div>
                <input ref={textRef} />
                <button onClick={handleAddItem}>添加</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, index) => <li key={index}>
                            <div>
                                <span>{item}</span>
                                <button onClick={() => handleDelItem(index)}>删除</button>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
            {!list.length && <div>空空如也</div>}
        </div>
    )
}