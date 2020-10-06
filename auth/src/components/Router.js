import React from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../routes/Login";
import Register from "../routes/Register";
import Home from "../routes/Home";
import NotFound from "../routes/NotFound";

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/Register" component={Register}/>
                <Route exact path="/Home" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;