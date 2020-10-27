import * as React from "react";
import classNames from "classnames";
import { MenuGroup } from "../menu-group/MenuGroup";
import { MenuList } from "../menu-list/MenuList";
import { Filter } from "../filter/Filter";
import  "./Menu.scss";

interface IProps {
    open: boolean;
}

const Menu: React.FC<IProps> = ({open}) => (
    <div className={classNames("menu", {"menu_open": open})}>
        <MenuGroup title={"menu-group-1"}>
            <MenuList>
                <Filter name="filter-1" onClick={() => alert("filter-1")}/>
                <Filter name="filter-2" onClick={() => alert("filter-2")}/>
                <Filter name="filter-3" onClick={() => alert("filter-3")}/>
            </MenuList>
        </MenuGroup>
        <MenuGroup title={"menu-group-2"}>
            <MenuList>
                <Filter name="filter-4" onClick={() => alert("filter-4")}/>
                <Filter name="filter-5" onClick={() => alert("filter-5")}/>
                <Filter name="filter-6" onClick={() => alert("filter-6")}/>
            </MenuList>
        </MenuGroup>
    </div>
);

export { Menu };