import React, {useEffect, useState} from "react"
import store from "../redux/store"
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";


export default function Cinemas(props) {
    const [cityName] = useState(store.getState().CityReducer.cityName)
    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            console.log('从后台取数据')
            store.dispatch(getCinemaListAction())
        } else {
            console.log('从store缓存中取数据')
        }
        const unsubscribe = store.subscribe(() => {
            setCinemaList(store.getState().CinemaListReducer.list)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div onClick={() => props.history.push(`/city`)}>{cityName}</div>
                <div onClick={() => props.history.push(`/cinemas/search`)}>搜索</div>
            </div>
            {
                cinemaList.map(item => <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                </dl>)
            }
        </div>
    )
}