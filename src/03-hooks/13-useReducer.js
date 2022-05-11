import React, {useReducer} from "react"

const reducer = (prevState, action) => {
    const newState= {...prevState}
    switch (action.type) {
        case 'minus':
            newState.count--
            return newState
        case 'add':
            newState.count++
            return newState
        default:
            return prevState
    }
}

const store = {
    count: 0
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, store)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'minus'
                })
            }} style={{width: '50px'}}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: 'add'
                })
            }} style={{width: '50px'}}>+</button>
        </div>
    )
}