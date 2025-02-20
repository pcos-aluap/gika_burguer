import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Menu } from './pages/menu'
import { enableMSW } from './api/mocks/index'
import { Cart } from './pages/cart/to-desktop'
import { CartItemsPage } from './pages/cart/to-mobile/cart-items-page'
import { OrderInfoPage } from './pages/cart/to-mobile/order-info-page'
import { CartForm } from './pages/cart/cart-form'

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
        element: <CartForm />,
        children: [
          {
            path: '/cart/desktop',
            element: <Cart />
          },
          {
            path: '/cart/mobile',
            element: <CartItemsPage />,
          },
          {
            path: '/cart/order-info',
            element: <OrderInfoPage />
          }
        ]
      },
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

