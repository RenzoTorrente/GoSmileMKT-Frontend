import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginScreen from '../../Screens/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen';
import { Redirect } from 'react-router';
import { OnlyLogOut } from './OnlyLogOut';
function OnlylogOutRoutes():JSX.Element{
    return (
        <Switch>
         <Route exact path="/personal_login" component={LoginScreen}/>
         <Route exact path="/personal_register" component={RegisterScreen}/>
         <Redirect to="/" />
        </Switch>   
    )
}
export  default OnlylogOutRoutes;