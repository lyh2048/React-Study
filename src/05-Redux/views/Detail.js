import React, {useEffect} from "react"
import store from "../redux/store"

export default function Detail(props) {
    useEffect(() => {
        console.log("Detail component create")
        store.dispatch({
            type: 'hideTabBar'
        })
        return () => {
            console.log("Detail component destroy")
            store.dispatch({
                type: 'showTabBar'
            })
        }
    }, [])
    const id = props.match.params.id
    return (
        <div>
            Detail-{id}
        </div>
    )
}