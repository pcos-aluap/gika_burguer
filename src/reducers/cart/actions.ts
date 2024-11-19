import { CartItem } from "./reducer"


export enum ActionTypes {
    ADD_OR_UPDATE_ITEM = 'ADD_OR_UPDATE_ITEM',
    UPDATE_ITEMS_QUANTITY = 'UPDATE_ITEMS_QUANTITY',
    REMOVE_ITEM = 'REMOVE_ITEM'
}

export type Actions =
  | {
      type: ActionTypes.ADD_OR_UPDATE_ITEM
      payload: {
        item: CartItem
      }
    }
  | {
      type:
        ActionTypes.REMOVE_ITEM
      payload: {
        menuItemId: CartItem['menuItem']['id']
      }
    }

export function addOrUpdateItemAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_OR_UPDATE_ITEM,
    payload: {
      item,
    },
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