import React from "react"
import propTypes from 'prop-types'

export default function SideBar(props) {
    const {bg, position} = props
    const obj1 = {
        left: 0
    }
    const obj2 = {
        right: 0
    }
    const obj = {
        background: bg,
        width: '200px',
        position: 'fixed'
    }
    const styleObj = position === "left" ? {...obj, ...obj1} : {...obj, ...obj2}
    return (
        <div style={styleObj}>
            SideBar
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    )
}

SideBar.defaultProps = {
    position: "left"
}

SideBar.propTypes = {
    bg: propTypes.string,
    position: propTypes.string
}