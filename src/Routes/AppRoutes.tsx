import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import { PrivatesRoutes } from './PrivatesRoutes/PrivatesRoutes';
import RoutesPrivates from './PrivatesRoutes/RoutesPrivate';
import { OnlyLogOut } from './OnlyLogOutRoutes/OnlyLogOut';
import HomeScreen from '../Screens/HomeScreen';
import { NavbarHome } from '../Components/HomeComponents/NavbarHome';
import { Box } from '@chakra-ui/react';
import SmallCentered from '../Components/Footer/Footer';
import Footer from '../Components/Footer/Footer';
import PlansScreen from '../Screens/PlansScreen';
import { ProductWebScren } from '../Screens/ProductwebScreen';
import ScreenContact from '../Screens/ScreenContact';
function AppRoutes():JSX.Element{
    return (
   <Router>
     <Box   overflowX="hidden" >
      <NavbarHome/>  

         <Route 
           
         render={({location}:{location:any} )=>(
           
          <div  key={location.pathname}>
          <Switch location={location}>
          
          <Route exact path="/" component={HomeScreen} />
         <Route exact path="/productos/planes" component={PlansScreen}/>
         <Route exact path="/productos/web" component={ProductWebScren}/>
         <Route exact path="/contact" component={ScreenContact}/>
         <OnlyLogOut exact path="/personal_register">
           <RegisterScreen/>
         </OnlyLogOut>
         <OnlyLogOut exact path="/personal_login">
           <LoginScreen/>
         </OnlyLogOut>
         <PrivatesRoutes>
        <RoutesPrivates/>
         </PrivatesRoutes>
        </Switch>
        </div>
     
         )  }  
       
         />
    <Footer/>
    </Box>
   </Router>
 
    )
}
export default AppRoutes;