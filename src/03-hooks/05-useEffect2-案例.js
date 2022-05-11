import React, {useEffect, useState} from "react"
import axios from "axios";

export default function App() {
    const [type, setType] = useState(1)

    return (
        <div>
            <div>
                <button onClick={() => setType(1)}>正在热映</button>
                <button onClick={() => setType(2)}>即将上映</button>
            </div>
            <div>
                <FilmList type={type} />
            </div>
        </div>
    )
}

function FilmList(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        getFilmList(props.type)
    }, [props.type])

    const getFilmList = (type) => {
        let k = 6369301
        if (type === 2) {
            k = 8077848
        }
        axios({
            url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=${type}&k=${k}`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(resp => {
            console.log(resp.data.data)
            const { films } = resp.data.data
            setList(films)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <ul>
                {
                    list.map(item => <li key={item.filmId}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}