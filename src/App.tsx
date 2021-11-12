import React from 'react';
import AppRoutes from './Routes/AppRoutes'
import { getRoleUser } from './helpers/UserDataHelper';
function App():JSX.Element {
let role = getRoleUser();
console.log(role);
  return (
    <AppRoutes/>
  
  )
}

export default App;
