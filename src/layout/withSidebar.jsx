import React from "react";
import {Outlet} from "react-router-dom";
import {RootMenu, PublicMenu, OperatorMenu, HeadMenu, StudentMenu} from "./sidebar/MenuData";
import Sidebar from "./sidebar";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import AppRoot from "./global/AppRoot";
import AppMain from "./global/AppMain";
import AppWrap from "./global/AppWrap";
// import {APICore} from "@/api/APICore";

const WithSidebar = ({title, ...props}) => {
    // const api = new APICore();
    // const user = api.getLoggedInUser();
    const user = {
        role: 5,
        name: 'Achmad Wikramawardhana',
        email: 'achmadwikramawardhana@gmail.com'
    }
    const menu = () => {
        switch (user?.role) {
            case '1':
                return RootMenu
            case '2':
                return OperatorMenu
            case 5:
                return StudentMenu
            case '6':
                return HeadMenu
            default:
                return PublicMenu;
        }
    }
    return (
        <React.Fragment>
            <Head title={!title && 'Loading'}/>
            <AppRoot>
                <AppMain>
                    <Sidebar menuData={menu()} user={user} fixed/>
                    <AppWrap>
                        <Header fixed user={user}/>
                        <Outlet context={{user: user}}/>
                        <Footer/>
                    </AppWrap>
                </AppMain>
            </AppRoot>
        </React.Fragment>
    );
};
export default WithSidebar;
