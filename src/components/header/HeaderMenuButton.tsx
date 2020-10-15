import * as React from "react";
import "./Header.scss";

type IProps = {
    onClick: () => void;
}

const HeaderMenuButton: React.FC<IProps> = ({onClick}) => (
    <button className="header-menu-button" onClick={onClick}>
        <i className="header-menu-button__icon" />
    </button>
);

export { HeaderMenuButton };