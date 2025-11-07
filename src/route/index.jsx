import React, {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import {Routes, Route, useLocation, BrowserRouter} from "react-router-dom";
import ThemeProvider from "@/layout/provider";
import {NoSidebar, WithSidebar} from "@/layout";
import PrivateRoute from "@/route/PrivateRoute";
import ForgotPassword from "@/pages/auth/forget-password";
import ResetPassword from "@/pages/auth/reset-password";
import Logout from "@/pages/auth/logout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Error404 from "@/pages/error/Error404";
import Error504 from "@/pages/error/Error504";
import PublicDashboard from "@/pages/public/dashboard";
import PublicRegister from "@/pages/public/register";
import PublicAnnouncement from "@/pages/public/announcement";
import PublicDownload from "@/pages/public/download";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

const Router = () => {
    return (
        <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true,}}>
            <ScrollToTop>
                <Routes>
                    <Route element={<ThemeProvider/>}>
                        <Route element={<WithSidebar/>}>
                            <Route index element={<PublicDashboard/>}/>
                            <Route path="data-pendaftar" element={<PublicRegister/>}/>
                            <Route path="pengumuman" element={<PublicAnnouncement/>}/>
                            <Route path="unduhan" element={<PublicDownload/>}/>
                        </Route>
                        <Route element={<PrivateRoute/>}>
                            <Route element={<WithSidebar/>}>

                            </Route>
                        </Route>
                        <Route element={<NoSidebar/>}>
                            <Route path="auth">
                                <Route path="keluar" element={<Logout/>}/>
                                <Route path="lupa-sandi" element={<ForgotPassword/>}/>
                                <Route path="reset-sandi/:token" element={<ResetPassword/>}/>
                                <Route path="masuk" element={<Login/>}></Route>
                                <Route path="buat-akun" element={<Register/>}></Route>
                            </Route>
                            <Route path="errors">
                                <Route path="404" element={<Error404/>}></Route>
                                <Route path="504" element={<Error504/>}></Route>
                            </Route>
                            <Route path="*" element={<Error404/>}></Route>
                        </Route>
                    </Route>
                </Routes>
            </ScrollToTop>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default Router;
