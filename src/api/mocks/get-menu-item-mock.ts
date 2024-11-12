import { http, HttpResponse } from 'msw'
import { MenuItem } from '../../@types/menu'

interface GetMenuItemProps {
    menuItemId: string
}

export const getMenuItem = http.get<GetMenuItemProps, never, MenuItem>('/menu/:menuItemId', ({params}) => {
    const { menuItemId } = params

    return HttpResponse.json({
        id: 113,
        image: "",
        name: "Hamburguer 13",
        description: "Pao, Hamburguer, Queijo, Presunto, Ovo, Calabresa, Salsicha, Bacon, Frango, Salsicha, Bacon, Frango",
        cost: 7.00,
        available: true
    })
})