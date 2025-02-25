import { CartItem } from "./reducer"


export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    INCREMENT_ITEMS_QUANTITY = 'INCREMENT_ITEMS_QUANTITY',
    DECREMENT_ITEMS_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
    REMOVE_ITEM = 'REMOVE_ITEM'
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: CartItem
      }
    }
  | {
      type:
        | ActionTypes.INCREMENT_ITEMS_QUANTITY
        | ActionTypes.DECREMENT_ITEMS_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        menuItemId: CartItem['menuItem']['id']
      }
    }

export function addItemAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export function incrementItemAction(menuItemId: CartItem['menuItem']['id']) {
 return {
  type: ActionTypes.INCREMENT_ITEMS_QUANTITY,
  payload: {
    menuItemId
  }
 } satisfies Actions
}

export function decrementItemAction(menuItemId: CartItem['menuItem']['id']) {
  return {
   type: ActionTypes.DECREMENT_ITEMS_QUANTITY,
   payload: {
     menuItemId
   }
  } satisfies Actions
 }

export function removeItemAction(menuItemId: CartItem['menuItem']['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        menuItemId,
    },
  } satisfies Actions
}