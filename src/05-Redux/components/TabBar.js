import React from "react"
import {NavLink} from "react-router-dom"
import './css/TabBar.css'

export default function TabBar() {
    return (
        <div className={"tab"}>
            <ul>
                <li>
                    <NavLink to={"/films"}>电影</NavLink>
                </li>
                <li>
                    <NavLink to={"/cinemas"}>影院</NavLink>
                </li>
                <li>
                    <NavLink to={"/center"}>我的</NavLink>
                </li>
            </ul>
        </div>
    )
}