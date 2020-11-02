import * as React from "react";
import classNames from "classnames";
import {useEventListener} from "js/hooks";
import { MenuGroup } from "../menu-group/MenuGroup";
import { MenuList } from "../menu-list/MenuList";
import { Filter } from "../filter/Filter";
import  "./Menu.scss";

interface IProps {
    open: boolean;
}

const  HEADER_HEIGHT = 52;

const Menu: React.FC<IProps> = ({open}) => {

    const [menuHeight, setMenuHeight] = React.useState<string>("auto");

    const menuRef = React.createRef<HTMLDivElement>();

    const onResize = React.useCallback(
        () => {
            if (menuRef.current) {
                const currentMenuHeigth = menuRef.current.offsetHeight;
                const availableHeigth =  window.innerHeight - HEADER_HEIGHT;
                const requiredMenuHeight = ((availableHeigth < currentMenuHeigth) || (availableHeigth === currentMenuHeigth))
                    ?  availableHeigth + "px"
                    : "auto";
                setMenuHeight(requiredMenuHeight);
            }
        },
        [menuRef]
    );
    
    React.useEffect(
        () => {
            onResize();
        },
        [onResize]
    );
    
    useEventListener("resize", onResize);

    return (
        <div 
            className={classNames("menu", {"menu_open": open})} 
            ref={menuRef} 
            style={{height: menuHeight}}
        >
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
};

export { Menu };