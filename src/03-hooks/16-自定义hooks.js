import React, {useEffect, useMemo, useState} from "react"
import axios from "axios";

function useCinemaList() {
    const [list, setList] = useState([])

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a": "3000", "ch": "1002", "v": "5.0.4", "e": "16395416565231270166529", "bc": "110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(resp => {
            console.log(resp.data.data)
            const {cinemas} = resp.data.data
            setList(cinemas)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return {
        cinemaList: list
    }
}


function useFilter(list, text) {
    const resultList = useMemo(() => {
        return list.filter(item => {
            return item.name.toUpperCase().includes(text.toUpperCase()) || item.address.toUpperCase().includes(text.toUpperCase())
        })
    }, [list, text])
    return {
        resultList
    }
}


export default function App() {
    const [text, setText] = useState('')
    const { cinemaList } = useCinemaList()
    const { resultList } = useFilter(cinemaList, text)

    return (
        <div>
            <div>
                <input type="text"
                       style={{width: '100%', height: '35px', lineHeight: '35px'}}
                       value={text}
                       onChange={(evt) => setText(evt.target.value)} />
            </div>
            <div>
                <ul>
                    {
                        resultList.map(item => <li key={item.cinemaId}>
                            <div>
                                <div style={{fontSize: 'large', fontWeight: 'bold'}}>{item.name}</div>
                                <div style={{color: 'gray', fontSize: 'small'}}>{item.address}</div>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}