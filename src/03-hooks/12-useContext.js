import React, {useContext, useEffect, useState} from "react"
import axios from "axios"
import './css/normalize.css'

const GlobalContext = React.createContext()


export default function App() {
    const [list, setList] = useState([])
    const [info, setInfo] = useState('')

    useEffect(() => {
        axios.get('data.json').then(resp => {
            console.log(resp.data.data)
            setList(resp.data.data.films)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            info: info,
            changeInfo: (info) => {
                setInfo(info)
            }
        }}>
            <div>
                <h2 style={{textAlign: 'center'}}>App</h2>
                <div style={{display: 'flex', marginTop: '20px'}}>
                    <ItemList list={list} />
                    <ItemDetail />
                </div>
            </div>
        </GlobalContext.Provider>
    )
}

function ItemList(props) {
    const list = props.list
    const context = useContext(GlobalContext)
    return (
        <div style={{width: '200px', height: '600px', overflow: 'auto'}}>
            {
                list.map(item => <div key={item.filmId} onClick={() => context.changeInfo(item.synopsis)}>
                    <img src={item.poster} alt={item.name} style={{width: '100%', height: '300px'}} />
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
    const context = useContext(GlobalContext)
    return (
        <div style={{flex: 1}}>
            <span style={{margin: '5px', padding: '5px', textAlign: 'center'}}>{context.info}</span>
        </div>
    )
}