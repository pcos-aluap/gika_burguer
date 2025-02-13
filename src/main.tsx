import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Menu } from './pages/menu'
import { enableMSW } from './api/mocks/index'
import { Cart } from './pages/cart/to-desktop'
import { CartItemsPage } from './pages/cart/to-mobile/cart-items-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/cart-mobile',
        element: <CartItemsPage />
      }
    ]
  }
])

enableMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
})

