import React, {useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import Register from "./routes/Register";

const AppRouter =({isLoggedIn}) =>{
    return(
        <Router>
            {isLoggedIn}
            <Switch>
                {isLoggedIn ? 
                <>
                <Route exact path="/">
                    <Home />
                </Route>
                </>
                :
                <>
                <Route exact path="/">
                    <Auth />
                </Route>
                </>
                }
            </Switch>
        </Router>
    )
}

export default AppRouter;