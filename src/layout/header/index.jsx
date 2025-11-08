import React from "react";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import User from "./dropdown/user";
import Toggle from "@/layout/sidebar/Toggle";
import Logo from "@/layout/logo";
import { useTheme, useThemeUpdate } from '@/layout/provider';
import {Button, Icon} from "@/components";

const Header = ({ fixed, className, ...props }) => {
    const {user} = props;
    const theme = useTheme();
    const themeUpdate = useThemeUpdate();
    const navigate = useNavigate();

    const headerClass = classNames({
        "nk-header": true,
        "nk-header-fixed": fixed,
        [`is-light`]: theme.header === "white",
        [`is-${theme.header}`]: theme.header !== "white" && theme.header !== "light",
        [`${className}`]: className,
    });
    return (
        <div className={headerClass}>
            <div className="container-fluid">
                <div className="nk-header-wrap">
                    <div className="nk-menu-trigger d-xl-none ms-n1">
                        <Toggle
                            className="nk-nav-toggle nk-quick-nav-icon d-xl-none ms-n1"
                            icon="menu"
                            click={themeUpdate.sidebarVisibility}
                        />
                    </div>
                    <div className="nk-header-brand d-xl-none">
                        <Logo user={user}/>
                    </div>
                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            {user ? (
                                <li className="user-dropdown">
                                    <User user={user}/>
                                </li>
                            ) : (
                                <React.Fragment>
                                    <li className="notification-dropdown me-n1">
                                        <Button color="success" size="sm" onClick={() => {
                                            navigate('auth/buat-akun')
                                        }}>
                                            <Icon name="plus"/><span>Daftar</span>
                                        </Button>
                                    </li>
                                    <li className="notification-dropdown hide-mb-xs">
                                        <Button color="info" size="sm" onClick={() => {
                                            navigate('auth/masuk')
                                        }}>
                                            <Icon name="signin"/><span>Masuk</span>
                                        </Button>
                                    </li>
                                </React.Fragment>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
