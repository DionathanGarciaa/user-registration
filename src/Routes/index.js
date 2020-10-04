import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateAccount from "../Pages/CreateAccount";
import Login from '../Pages/Login/index';
import Home from '../Pages/Home/index';


function Routes() {

    return (

        <Switch>
            
            <Route path={"/Login"} component={Login} />
            <Route path={"/CreateAccount"} component={CreateAccount} />
            <Route path={"/Home"} component={Home} />


        </Switch>
    );
}

export default Routes;