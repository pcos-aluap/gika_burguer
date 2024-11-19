import { createContext, ReactNode, useReducer } from "react"
import { CartItem, cartReducer } from "../reducers/cart/reducer"
import { addOrUpdateItemAction, removeItemAction } from "../reducers/cart/actions"


interface CartContextType {
    cartState: CartItem[]
    addOrUpdateItem: (cartItem: CartItem) => void
    removeItem: (cartItemId: CartItem['menuItem']['id']) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps){
    const [cartState, dispatch] = useReducer(cartReducer, []);

    function addOrUpdateItem(cartItem: CartItem) {
        dispatch(addOrUpdateItemAction(cartItem));
    }

    function removeItem(cartItemId: CartItem['menuItem']['id']) {
        dispatch(removeItemAction(cartItemId));
    }
    
    return (
        <CartContext.Provider
            value={{
                cartState,
                addOrUpdateItem,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    )
}