import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Menu } from './pages/menu'
import { enableMSW } from './api/mocks/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Menu />
      }
    ]
  }
])

// enableMSW().then(() => {
//   createRoot(document.getElementById('root')!).render(
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>,
//   )
// })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
