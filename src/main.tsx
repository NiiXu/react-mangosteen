import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider, Router} from 'react-router-dom'
// import {App} from './App'

const router = createBrowserRouter([
    {
        path:'/',
        element:<div>root</div>
    }
])

const div = document.getElementById('root') as HTMLElement
const root =ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
