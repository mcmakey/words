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
            <MenuGroup title={"Show words:"}>
                <MenuList>
                    <Filter name="All" onClick={() => alert("All")}/>
                    <Filter name="Unlearned" onClick={() => alert("Unlearned")}/>
                    <Filter name="Studied" onClick={() => alert("Studied")}/>
                    <Filter name="Learned" onClick={() => alert("Learned")}/>
                </MenuList>
            </MenuGroup>
        </div>
    );
};

export { Menu };