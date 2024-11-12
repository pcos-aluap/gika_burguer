import { setupWorker } from 'msw/browser'

export const worker = setupWorker()

export async function enableMSW() {
    const envMode = process.env.NODE_ENV
    if (envMode !== 'development') {
      return
    }
  
    await worker.start()
  }