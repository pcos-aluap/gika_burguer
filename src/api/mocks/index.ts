import { setupWorker } from 'msw/browser'
import { getMenuMock } from './get-menu-mock'
import { getMenuItemMock } from './get-menu-item-mock'

export const worker = setupWorker(getMenuMock, getMenuItemMock)

export async function enableMSW() {
    const envMode = process.env.NODE_ENV
    if (envMode !== 'development') {
      return
    }
  
    await worker.start()
  }