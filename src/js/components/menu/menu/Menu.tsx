import * as React from "react";
import classNames from "classnames";
import { MenuGroup } from "../menu-group/MenuGroup";
import { MenuList } from "../menu-list/MenuList";
import  "./Menu.scss";

interface IProps {
    open: boolean;
}

const Menu: React.FC<IProps> = ({open}) => (
    <div className={classNames("menu", {"menu_open": open})}>
        <MenuGroup title={"menu-group-1"}>
            <MenuList>
                {"Filter 1"}
                {"Filter 2"}
                {"Filter 3"}
            </MenuList>
        </MenuGroup>
        <MenuGroup title={"menu-group-2"}>
            <MenuList>
                {"Filter 4"}
                {"Filter 5"}
                {"Filter 6"}
            </MenuList>
        </MenuGroup>
    </div>
);

export { Menu };