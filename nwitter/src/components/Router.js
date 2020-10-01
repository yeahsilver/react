import React, { useState } from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn }) =>{
    // true이면 Home 실행
    return(
        <Router>
            <Switch>
                {isLoggedIn ?
                <>
                <Route>
                    <Home exact path="/" />
                </Route>
                </> 
                : <Route> 
                    <Auth exact path="/" /> 
                    </Route>
                }
            </Switch>
        </Router>
    )
};

export default AppRouter;