import React, {useContext, useReducer} from "react"

const store = {
    a: '11',
    b: '11'
}

const reducer = (prevState, action) => {
    const newState = {...prevState}
    switch (action.type) {
        case 'changeA':
            newState.a = action.value
            return newState
        case 'changeB':
            newState.b = action.value
            return newState
        default:
            return prevState
    }
}

const GlobalContext = React.createContext()

export default function App() {
    const [state, dispatch] = useReducer(reducer, store)
    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                App
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {
    const { dispatch } = useContext(GlobalContext)
    return (
        <div>
            Child1
            <button onClick={() => dispatch({
                type: 'changeA',
                value: '2233'
            })}>改变Child2</button>
            <button onClick={() => dispatch({
                type: 'changeB',
                value: '2233'
            })}>改变Child3</button>
        </div>
    )
}

function Child2() {
    const { state } = useContext(GlobalContext)
    return (
        <div>Child2-{state.a}</div>
    )
}

function Child3() {
    const { state } = useContext(GlobalContext)
    return (
        <div>Child3-{state.b}</div>
    )
}