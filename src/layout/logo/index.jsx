import React from "react";
import {Link} from "react-router-dom";
import LogoLight2x from "@/images/logo2x.png";
import LogoDark2x from "@/images/logo-dark2x.png";
import LogoSmall from "@/images/logo-small.png";

const Logo = () => {
    const user = null
    const dashboard = (role) => {
        switch (role) {
            case 5:
                return '/siswa'
            default:
                return '/'
        }
    }
    return (
        <Link to={dashboard(user?.role)} className="logo-link">
            <img className="logo-light logo-img" src={String(LogoLight2x)} alt="logo"/>
            <img className="logo-dark logo-img" src={String(LogoDark2x)} alt="logo"/>
            <img className="logo-small logo-img logo-img-small" src={String(LogoSmall)} alt="logo"/>
        </Link>
    );
};

export default Logo;
