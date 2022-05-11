import React, {useEffect, useState} from "react"

export default function App() {
    const [name, setName] = useState('sam')

    useEffect(() => {
        const newName = name.substring(0, 1).toUpperCase() + name.substring(1)
        setName(newName)
    }, [name])

    return (
        <div>
            <div>App-{name}</div>
            <button onClick={() => setName('tom')}>click</button>
        </div>
    )
}