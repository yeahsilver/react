import React, { useState } from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({ isLoggedIn }) =>{
    // true이면 Home 실행
    return(
        <Router>
            {isLoggedIn && <Navigation/>}
            <Switch>
                {isLoggedIn ?
                <>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                </> 
                : 
                <>
                <Route> 
                    <Auth exact path="/" /> 
                </Route>
                </>
                }
            </Switch>
        </Router>
    )
};

export default AppRouter;