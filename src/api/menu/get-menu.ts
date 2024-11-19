import { MenuCategory } from "../../@types/menu";
import { MenuItem } from "../../@types/menu";
import { api } from "../../lib/axios";

interface CategoryFromAPI {
    id: number;
    name: string;
    menuItemDTOList: MenuItem[];
};

interface MenuFromAPI {
    categoryDTOList: CategoryFromAPI[];
};

export async function getMenu(): Promise<MenuCategory[]>{
    const response = await api.get<MenuFromAPI>("/menu");

    const categories = response.data.categoryDTOList.map(item => ({
        id: item.id,
        name: item.name,
        items: item.menuItemDTOList
    }));

    return categories;
}

export async function getDetailsMenuItem(id: number) {
    const response = await api.get<MenuItem>("/menu/" + id);

    console.log(response.data);
    return response.data;
}