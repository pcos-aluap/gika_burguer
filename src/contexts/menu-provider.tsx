import { createContext, ReactNode, useEffect, useState } from "react";
import { MenuCategory } from "../@types/menu";
import { MenuItem } from "../@types/menu";

interface MenuContextType {
    menu: MenuCategory[];
    filteredMenuItems: MenuItem[];
    isSearching: boolean;
    addMenu: (data: MenuCategory[]) => void;
    filterMenuItemsForSearch: (searchTerm: string) => void;
    buildFilteredMenuItems: () => void;
    closeSearch: () => void;
}

interface MenuContextProviderProps {
    children: ReactNode;
}

export const MenuContext = createContext({} as MenuContextType);

export function MenuContextProvider({ children }: MenuContextProviderProps){
    const [menu, setMenu] = useState<MenuCategory[]>([]);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [filteredMenuItems, setFilteredMenuItems] = useState<MenuItem[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    function addMenu(data: MenuCategory[]) {
        setMenu(data);
    }

    function buildFilteredMenuItems(){
        let menuItemsAux: MenuItem[] = [];

        menu.forEach(category => {
            menuItemsAux = [...menuItemsAux, ...category.items];
        })

        setMenuItems(menuItems);
    }

    function filterMenuItemsForSearch(searchTerm: string){
        if(searchTerm === ''){
            setFilteredMenuItems([]);
            setIsSearching(false);
        }
        else{
            if(!isSearching){
                setIsSearching(true);
            }
            setFilteredMenuItems(menuItems.filter((menuItem) => 
                menuItem.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
            ));
        }
    }

    function closeSearch(){
        setIsSearching(false);
    }

    useEffect(() => {
        buildFilteredMenuItems()
    }, [menu]);

    return (
        <MenuContext.Provider
            value={{
                menu,
                filteredMenuItems,
                isSearching,
                addMenu,
                filterMenuItemsForSearch,
                buildFilteredMenuItems,
                closeSearch
            }}
        >
            {children}
        </MenuContext.Provider>
    );
}