import React, {useCallback, useState} from "react"

export default function App() {
    const [text, setText] = useState('')
    const [list, setList] = useState([])

    const handleChange = useCallback((evt) => {
        setText(evt.target.value)
    }, [])

    const handleAddItem = useCallback(() => {
        setList([...list, text])
        setText('')
    }, [text, list])

    const handleDelItem = useCallback((index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }, [list])

    return (
        <div>
            <h2>待办事项</h2>
            <div>
                <input value={text} onChange={(evt) => handleChange(evt)} />
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