import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'

import { 
  SocialMedia,
  WIP
} from './components/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <WIP />,
  },
  {
    path: "/dev",
    element: <SocialMedia />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)