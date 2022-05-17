import React from "react"
import {Route, Switch, Redirect, NavLink} from 'react-router-dom'
import NowPlaying from "./films/NowPlaying"
import ComingSoon from "./films/ComingSoon"

export default function Films() {
    return (
        <div>
            <div style={{height: '200px', background: 'red'}}>轮播</div>
            <div>
                <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-around'}}>
                    <li>
                        <NavLink to={"/films/nowPlaying"} >正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/films/comingSoon"} >即将上映</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route path={"/films/nowPlaying"} component={NowPlaying} />
                    <Route path={"/films/comingSoon"} component={ComingSoon} />
                    <Redirect to={"/films/nowPlaying"} from={"/films"} />
                </Switch>
            </div>
        </div>
    )
}