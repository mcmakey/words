import * as React from "react";
import "./MenuGroup.scss";

interface IProps {
    title: string;
}

const MenuGroup: React.FC<IProps> = ({title, children}) => (
    <div className="menu-group">
        <div className="menu-group__title">{title}</div>
        {children}
    </div>
);

export { MenuGroup };