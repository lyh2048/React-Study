import React, {useEffect} from "react"
import {connect} from 'react-redux'

function Detail(props) {
    const {show, hide} = props
    useEffect(() => {
        console.log("Detail component create")
        // store.dispatch({
        //     type: 'hideTabBar'
        // })
        hide()
        return () => {
            console.log("Detail component destroy")
            // store.dispatch({
            //     type: 'showTabBar'
            // })
            show()
        }
    }, [show, hide])
    const id = props.match.params.id
    return (
        <div>
            Detail-{id}
        </div>
    )
}

export default connect(null, {
    hide: () => {
        return {
            type: 'hideTabBar'
        }
    },
    show: () => {
        return {
            type: 'showTabBar'
        }
    }
})(Detail)