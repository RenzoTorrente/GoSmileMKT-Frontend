import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import AdmCreatePostScreen from '../../Screens/ADMcreatepostScreen';
import { Tools } from '../../Components/dashboardComponent/Tools';
import { AdminScreen } from '../../Screens/AdminScreen';

function RoutesPrivates():JSX.Element{
return (
    <>
    <Tools>
    <Switch>
    <Route exact path="/dashboard" component={AdminScreen}/> 
    <Route exact path="/dashboard/createpost" component={AdmCreatePostScreen}/>
    <Route exact path="/dashboard/createpost/:id" component={AdmCreatePostScreen}/>
    <Redirect path="**" to =""/>
    </Switch>
    </Tools>
    </>
)
}
export default RoutesPrivates;