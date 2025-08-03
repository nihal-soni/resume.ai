import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in/sign-in.tsx'
import { ThemeProvider } from './context/theme-provider.tsx'

import Home from './home/home.tsx'
import Dashboard from './dashboard/dashboard.tsx'

const router = createBrowserRouter([
   {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }, 
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: 'auth/sign-in',
    element: <SignInPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
