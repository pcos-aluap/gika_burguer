import { useContext } from "react";
import { CartContext } from "../contexts/cart-provider";

export function useCart(){
    return useContext(CartContext)
}