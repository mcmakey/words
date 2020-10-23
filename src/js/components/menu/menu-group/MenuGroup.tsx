import * as React from "react";

interface IProps {
    title: string;
}

const MenuGroup: React.FC<IProps> = ({title, children}) => (
    <div className="menu-gruop">
        <div className="menu-group__title">{title}</div>
        {children}
    </div>
);

export { MenuGroup };