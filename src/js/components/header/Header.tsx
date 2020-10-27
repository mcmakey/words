import * as React from "react";
import { useToggle } from "js/hooks";
import { Menu } from "js/components";
import { HeaderMenuButton } from "./HeaderMenuButton";
import "./Header.scss";

const Header: React.FC = () => {

    const [showMenu, toggleShowMenu] = useToggle(false);

    return (
        <div className="header">
            <h1 className="header__title">Words</h1>
            <div className="header__menu">
                <HeaderMenuButton onClick={toggleShowMenu}/>
                <Menu open={showMenu}/>
            </div>
        </div>  
    );
};

export { Header };