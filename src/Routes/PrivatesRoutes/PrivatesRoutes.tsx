import React, { ReactNode, useEffect, useState } from "react";
import { getRoleUser } from "../../helpers/UserDataHelper";
import { Route, Redirect } from "react-router-dom";

export const PrivatesRoutes : React.FC<any> = ({children, ...rest}) => {
  let role = getRoleUser();
  return (
<Route {...rest}
  render={({ location }) =>
    role !== null ?
      children
      :
      <Redirect to={{
        pathname: "/",
      }} />} />
      ) 

        }

 