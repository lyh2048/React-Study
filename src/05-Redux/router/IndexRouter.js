import React, {Component} from 'react';
import { HashRouter, Route, Redirect, Switch } from "react-router-dom"
import Films from "../views/Films"
import Cinemas from "../views/Cinemas"
import Center from "../views/Center"
import NotFound from "../views/NotFound"
import Detail from "../views/Detail"
import Login from "../views/Login"


function isAuth() {
    return localStorage.getItem("token")
}

class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={"/films"} component={Films} />
                    <Route path={"/cinemas"} component={Cinemas} />
                    <Route path={"/center"} render={(props) => {
                        return isAuth() ? <Center {...props} /> : <Redirect to={"/login"} />
                    }} />
                    <Route path={"/login"} component={Login} />
                    <Route path={"/detail/:id"} component={Detail} />
                    <Redirect from={"/"} to={"/films"} exact />
                    <Route component={NotFound} />
                </Switch>
                {this.props.children}
            </HashRouter>
        );
    }
}

export default IndexRouter;