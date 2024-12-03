import { MenuItem } from "../../@types/menu"
import { Actions, ActionTypes } from "./actions"

export interface CartItem {
    menuItem: MenuItem
    foodPreferencies: string
    quantity: number
}

export function cartReducer(state: CartItem[], action: Actions) {
    switch (action.type) {
        case ActionTypes.ADD_OR_UPDATE_ITEM:
            const itemAlreadyAdded = state.find((cartItem) => cartItem.menuItem.id === action.payload.item.menuItem.id)

            if (itemAlreadyAdded) {
                state.map((cartItem) => {
                    if (cartItem.menuItem.id === action.payload.item.menuItem.id) {
                        cartItem.quantity = action.payload.item.quantity;
                        return state;
                    }
                })
                return [...state];
            }
            return [...state, action.payload.item];
        
        case ActionTypes.REMOVE_ITEM:
            const stateWithOutRemovedItem = state.filter((cartItem) => cartItem.menuItem.id === action.payload.menuItemId)
            return stateWithOutRemovedItem;

        default:
            return state;
    }
}