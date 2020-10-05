import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../Pages/Login/index';
import Home from '../Pages/Home/index';
import Forgot from '../Pages/ForgotPassword/index';
import CreateAccount from "../Pages/CreateAccount";


function Routes() {

    return (

        <Switch>
            
            <Route path={"/Login"} exact component={Login} />
            <Route path={"/Home"} component={Home} />
            <Route path={"/Forgot"} component={Forgot} />
            <Route path={"/CreateAccount"} component={CreateAccount} />



        </Switch>
    );
}

export default Routes;