import React, {useEffect, useState} from "react"

export default function App() {
    const [state, setState] = useState(true)

    return (
        <div>
            App
            <button onClick={() => setState(!state)}>click</button>
            {state && <Child />}
        </div>
    )
}


function Child() {

    useEffect(() => {
        window.onresize = () => {
            console.log('resize')
        }

        const timer = setInterval(() => {
            console.log('timer')
        }, 1000)

        return () => {
            window.onresize = null
            clearInterval(timer)
        }
    }, [])

    return <div>Child</div>
}