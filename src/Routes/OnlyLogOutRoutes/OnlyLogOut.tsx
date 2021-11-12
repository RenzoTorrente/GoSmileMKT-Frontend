import React, { useState, useEffect, ReactNode } from "react";
import { Redirect, Route } from "react-router";
import { getRoleUser } from "../../helpers/UserDataHelper";
import OnlylogOutRoutes from "./OnlyLogOutRoutes";

export const OnlyLogOut : React.FC<any> =  function ({ children,  ...rest }): JSX.Element {
  let role = getRoleUser();
 return ( 
 <Route {...rest}
  render={({ location }) =>
    role == false ?
      children
      :
      <Redirect to={{
        pathname: "/",
        state: { from: location }
      }} />} />) 
    
    }
