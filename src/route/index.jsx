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
import Verify from "@/pages/auth/verify";
import Register from "@/pages/auth/register";
import Error404 from "@/pages/error/Error404";
import Error504 from "@/pages/error/Error504";
import {PublicDashboard, StudentDashboard} from "@/pages/dashboard";
import PublicRegister from "@/pages/public/register";
import PublicDownload from "@/pages/public/download";
import Timetable from "@/pages/public/information/timetable";
import Location from "@/pages/public/information/location";
import Plot from "@/pages/public/information/plot";
import Capacity from "@/pages/public/information/capacity";
import Letter from "@/pages/public/letter";
import Signature from "@/pages/public/signature";
import Personal from "@/pages/student/register/personal.jsx";
import Program from "@/pages/student/register/program.jsx";
import Parent from "@/pages/student/register/parent.jsx";
import Address from "@/pages/student/register/address.jsx";
import Scholarship from "@/pages/student/register/scholarship.jsx";
import School from "@/pages/student/register/school.jsx";

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
                        <Route element={<PrivateRoute/>}>
                            <Route element={<WithSidebar/>}>
                                <Route path="siswa">
                                    <Route index element={<StudentDashboard />}/>
                                    <Route path="pendaftaran/data-pribadi" element={<Personal />}/>
                                    <Route path="pendaftaran/program-pilihan" element={<Program />}/>
                                    <Route path="pendaftaran/data-orangtua" element={<Parent />}/>
                                    <Route path="pendaftaran/data-alamat" element={<Address />}/>
                                    <Route path="pendaftaran/data-bantuan" element={<Scholarship />}/>
                                    <Route path="pendaftaran/sekolah-asal" element={<School />}/>
                                </Route>
                            </Route>
                        </Route>
                        <Route element={<WithSidebar/>}>
                            <Route index element={<PublicDashboard/>}/>
                            <Route path="auth/buat-akun" element={<Register/>}></Route>
                            <Route path="data-pendaftar" element={<PublicRegister/>}/>
                            <Route path="informasi/jadwal-pelaksanaan" element={<Timetable/>}/>
                            <Route path="informasi/lokasi-pendaftaran" element={<Location/>}/>
                            <Route path="informasi/alur-pelaksanaan" element={<Plot/>}/>
                            <Route path="informasi/daya-tampung" element={<Capacity/>}/>
                            <Route path="unduhan" element={<PublicDownload/>}/>
                        </Route>
                        <Route element={<NoSidebar/>}>
                            <Route path="auth">
                                <Route path="keluar" element={<Logout/>}/>
                                <Route path="lupa-sandi" element={<ForgotPassword/>}/>
                                <Route path="reset-sandi/:token" element={<ResetPassword/>}/>
                                <Route path="masuk" element={<Login/>}></Route>
                                <Route path="verifikasi/:user" element={<Verify/>}></Route>
                                <Route path="surat/:token" element={<Letter/>}/>
                                <Route path="tanda-tangan/:token" element={<Signature/>}/>
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
