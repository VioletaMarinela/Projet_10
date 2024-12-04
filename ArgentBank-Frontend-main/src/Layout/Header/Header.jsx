import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Logo from '../../Assets/img/argentBankLogo.webp';
import '../../Assets/css/main.css';
import { accountService } from '../../_Service/accountService';

const Header = () => {
    const navigate = useNavigate();
    const userisconnected = accountService.ConnectorNotConnect();
    const firstName = "Tony";

    let logout = () => {
        accountService.logout();
        navigate("/home");
    };

    return (
        <header className="main-nav">
            <NavLink to="/home" className="main-nav-logo">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {userisconnected ? (
                <nav>
                    <NavLink to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </NavLink>
                    <NavLink to="/home" onClick={logout} className="main-nav-item">
                        <i className="fa fa-sign-out" />
                        Sign Out
                    </NavLink>
                </nav>
            ) : (
                <nav>
                    <NavLink to="/signin" className="main-nav-item">
                        <i className="fa fa-user-circle" />
                        Sign In
                    </NavLink>
                </nav>
            )}
        </header>
    );
};

export default Header;
