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
                {showMenu &&
                    <div className="header__menu-container">
                        <Menu />
                    </div>
                }
            </div>
        </div>  
    );
};

export { Header };