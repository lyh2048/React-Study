import React, {useEffect, useState} from "react"
import axios from "axios"


export default function NowPlaying(props) {
    const [list, setList] = useState([])
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(resp => {
            console.log(resp.data.data.films)
            setList(resp.data.data.films)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleChangePage = (id) => {
        props.history.push(`/detail/${id}`)
    }

    return (
        <div>
            {
                list.map(item => <div
                    onClick={() => handleChangePage(item.filmId)}
                    key={item.filmId}
                    style={{textAlign: 'center', fontWeight: 'bold', margin: '10px'}}>
                    {item.name}
                </div>)
            }
        </div>
    )
}