import React, { ReactChild } from 'react';
import NavDashboard from '../../Components/dashboardComponent/NavDashboar';
import SideToolsBackOffice from '../../Components/dashboardComponent/SidebarTools';
import SmallWithLogoLeft from '../Footer/Footer';
import Footer from '../Footer/Footer';
export function Tools({children}:{children:ReactChild}):JSX.Element{

    return (
        <>
        <NavDashboard/>
             <SideToolsBackOffice>
             {children}
             </SideToolsBackOffice>
        </>
    )
}