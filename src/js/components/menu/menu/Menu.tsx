import * as React from "react";
import classNames from "classnames";
import {useEventListener} from "js/hooks";
import { FilterStatus } from "js/store/api/types";
import { MenuGroup } from "../menu-group/MenuGroup";
import { MenuList } from "../menu-list/MenuList";
import { Filter } from "../filter/FilterContainer";
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
                    <Filter filterName="All" filter={FilterStatus.SHOW_ALL} />
                    <Filter filterName="Unlearned"  filter={FilterStatus.SHOW_UNLEARNED}/>
                    <Filter filterName="Studied"  filter={FilterStatus.SHOW_STUDIED} />
                    <Filter filterName="Learned" filter={FilterStatus.SHOW_LEARNED} />
                </MenuList>
            </MenuGroup>
        </div>
    );
};

export { Menu };