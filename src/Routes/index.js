import React from "react";
import { Switch, Route } from "react-router-dom";
import Padrao from '../Pages/Padrao/index';
import Login from '../Pages/Login/index';
import Home from '../Pages/Home/index';
import CreateAccount from "../Pages/CreateAccount";


function Routes() {

    return (

        <Switch>
            
            <Route path={"/"} exact component={Padrao} />
            <Route path={"/Login"} component={Login} />
            <Route path={"/Home"} component={Home} />
            <Route path={"/CreateAccount"} component={CreateAccount} />

        </Switch>
    );
}

export default Routes;