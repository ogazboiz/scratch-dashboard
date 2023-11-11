import React from 'react';
import Dashboard from "./assets/dashboard.svg";
import Filter from "./assets/filter.svg";
import CandleStick from "./assets/candleStick.svg";
import Logout from "./assets/logout.svg"


export const  SidebarData = [
    {
        title: "Dashboard",
        icon: <img src={Dashboard} alt="Dashboard" />,
        link:"/home"
    },
    {
        title: "Filter",
        icon: <img src={Filter} alt="Filter" />,
        link:"/filter"
    },
    {
        title: "Numbers Generator",
        icon: <img src={CandleStick} alt="CandleStick" />,
        link:"/numberGenarator"
    },
    {
        title: "Logout",
        icon: <img src={Logout} alt="Logout" />,
        link:"/logout"
    }
]
 
