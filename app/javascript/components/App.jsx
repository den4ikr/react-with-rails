import React from "react";
import Home from "./Home/Home";
import Posts from "./Posts/Posts";
import Nav from "./Nav/Nav";
import { Route, Switch } from 'react-router-dom'

const App = (props) => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" render={ () => <Home /> } />
                <Route exact path="/posts" render={ () => <Posts /> } />
            </Switch>
        </div>
    )
}

export default App;