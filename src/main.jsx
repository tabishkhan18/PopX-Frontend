import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import LoginPage from './components/LoginPage.jsx'
import LandingPage from './components/LandingPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import Profile from './components/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/PopX/',
    element: <App />,
    children: [
      {
        path: "",
        element: <> 
        <LandingPage/>
        </>
      },
    ]
  },
  {
    path: "/PopX/LoginPage",
    element: <><LoginPage/> </>
  },
  {
    path: "/PopX/SignupPage",
    element: <><SignupPage/> </>
  },
  {
    path: "/PopX/Profile",
    element: <><Profile/> </>
  },



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
