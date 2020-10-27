import * as React from "react";
import "./MenuList.scss";

interface IProps {
    children: React.ReactNode;
}

const MenuList: React.FC<IProps> = ({children}) => {

    const items = React.Children.toArray(children);

    return (
        <ul className="menu-list">
            {items.map((item, index) => (
                <li className="menu-list__item" key={index}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export { MenuList };