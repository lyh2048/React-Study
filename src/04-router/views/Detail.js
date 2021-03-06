import React, {useEffect} from "react"

export default function Detail(props) {
    useEffect(() => {
        console.log("Detail component create")
        return () => {
            console.log("Detail component destroy")
        }
    }, [])
    const id = props.match.params.id
    return (
        <div>
            Detail-{id}
        </div>
    )
}