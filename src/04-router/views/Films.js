import React from "react"
import { Route, Switch, Redirect } from 'react-router-dom'
import NowPlaying from "./films/NowPlaying"
import ComingSoon from "./films/ComingSoon"

export default function Films() {
    return (
        <div>
            <div style={{height: '200px', background: 'red'}}>轮播</div>
            <div>导航栏</div>
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