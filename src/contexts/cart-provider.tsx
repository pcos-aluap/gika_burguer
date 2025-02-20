import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { CartItem, cartReducer } from "../reducers/cart/reducer"
import { addOrUpdateItemAction, removeItemAction } from "../reducers/cart/actions"

interface CartContextType {
    cartState: CartItem[]
    totalItemsPrice: number
    addOrUpdateItem: (cartItem: CartItem) => void
    removeItem: (cartItemId: CartItem['menuItem']['id']) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps){
    const [cartState, dispatch] = useReducer(cartReducer, [],
        (cartState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@gika-burguer:cart-state-1.0.0'
            )

            if(storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }

            return cartState
        }
    );
    const [ totalItemsPrice, setItemsTotalPrice ] = useState(0)

    function addOrUpdateItem(cartItem: CartItem) {
        dispatch(addOrUpdateItemAction(cartItem));
    }

    function removeItem(cartItemId: CartItem['menuItem']['id']) {
        dispatch(removeItemAction(cartItemId));
    }

    useEffect(() => {
        let totalcost = cartState.reduce((previousValue, currentItem) => {
            return (previousValue += currentItem.menuItem.cost * currentItem.quantity)
        }, 0)

        setItemsTotalPrice(totalcost)
    }, [cartState])

    useEffect(() => {
        if(cartState) {
            const stateJSON = JSON.stringify(cartState)
            localStorage.setItem('@gika-burguer:cart-state-1.0.0', stateJSON)
        }
    }, [cartState])
    
    return (
        <CartContext.Provider
            value={{
                cartState,
                totalItemsPrice,
                addOrUpdateItem,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    )
}