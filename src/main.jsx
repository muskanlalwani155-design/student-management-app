import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Edit from './Pages/Edit.jsx'
import View from './Pages/View.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import AddStudent from './Pages/AddStudent.jsx'

let router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <ErrorPage />},
  {path: '/edit/:id', element: <Edit />},
  {path: '/view/:id', element: <View />},
  {path: "/addstudent", element: <AddStudent/>}
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
