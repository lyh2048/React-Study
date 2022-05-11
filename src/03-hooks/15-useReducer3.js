import React, {useContext, useEffect, useReducer} from "react"
import axios from "axios"
import './css/normalize.css'

const store = {
    list: [],
    info: ''
}

const reducer = (prevState, action) => {
    const newState = {...prevState}
    switch (action.type) {
        case 'changeList':
            newState.list = action.value
            return newState
        case 'changeInfo':
            newState.info = action.value
            return newState
        default:
            return prevState
    }
}

const GlobalContext = React.createContext()


export default function App() {
    const [state, dispatch] = useReducer(reducer, store)

    useEffect(() => {
        axios.get('data.json').then(resp => {
            console.log(resp.data.data)
            // setList(resp.data.data.films)
            dispatch({
                type: 'changeList',
                value: resp.data.data.films
            })
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <h2 style={{textAlign: 'center'}}>App</h2>
                <div style={{display: 'flex', marginTop: '20px'}}>
                    <ItemList/>
                    <ItemDetail/>
                </div>
            </div>
        </GlobalContext.Provider>
    )
}

function ItemList() {
    const {state, dispatch} = useContext(GlobalContext)
    const list = state.list
    return (
        <div style={{width: '200px', height: '600px', overflow: 'auto'}}>
            {
                list.map(item => <div key={item.filmId} onClick={() => dispatch({
                    type: 'changeInfo',
                    value: item.synopsis
                })}>
                    <img src={item.poster} alt={item.name} style={{width: '100%', height: '300px'}}/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{fontWeight: 'bold', fontSize: 'large'}}>{item.name}</span>
                        <span style={{color: 'gray'}}>类型：{item.category}</span>
                    </div>
                </div>)
            }
        </div>
    )
}

function ItemDetail() {
    const {state} = useContext(GlobalContext)

    return (
        <div style={{flex: 1}}>
            <span style={{margin: '5px', padding: '5px', textAlign: 'center'}}>{state.info}</span>
        </div>
    )
}