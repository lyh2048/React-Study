import React from "react"

export default function Detail(props) {
    const id = props.match.params.id
    return (
        <div>
            Detail-{id}
        </div>
    )
}