import React, {useEffect, useState} from "react"
import axios from "axios"


export default function App() {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('data.json').then(resp => {
            console.log(resp.data.data)
            setList(resp.data.data.films)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            App
            <ul>
                {
                    list.map((item, index) => <li key={index}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}