import * as React from "react";
import { Menu } from "components";
import { HeaderMenuButton } from "./HeaderMenuButton";
import "./Header.scss";

const Header: React.FC = () => {

    return (
        <div className="header">
        <h1 className="header__title">Words</h1>
        <div className="header__menu">
            <HeaderMenuButton onClick={() => alert("hahaha")}/>
            <div className="header__menu-container">
                <Menu />
            </div>
        </div>
        </div>  
    );
};

export { Header };