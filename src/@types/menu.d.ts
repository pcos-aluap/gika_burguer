export interface MenuItem {
    id: number;
    image: string;
    name: string;
    description: string;
    cost: number;
    available: boolean;
}

interface MenuCategory {
    id: number
    name: string;
    items: MenuItem[];
};

interface MenuType {
    categories: MenuCategory[];
}