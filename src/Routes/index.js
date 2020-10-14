import React from "react";
import { Switch, Route } from "react-router-dom";
import Padrao from "../Pages/Padrao/index";
import Login from "../Pages/Login/index";
import CreateAccount from "../Pages/CreateAccount";
import Home from "../Pages/Home/index";
import UserInformation from "../Pages/UserInformation/index";
import CreateProduct from "../Pages/CreateProduct/index";



function Routes() {

    return (

        <Switch>
            
            <Route path={"/"} exact component={Padrao} />
            <Route path={"/Login"} component={Login} />
            <Route path={"/Home"} component={Home} />
            <Route path={"/CreateAccount"} component={CreateAccount} />
            <Route path={"/UserInformation"} component={UserInformation} />
            <Route path={"/CreateProduct"} component={CreateProduct} />


        </Switch>
    );
}

export default Routes;