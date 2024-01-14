import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import DivelogSingle  from './components/DivelogSingle '

import {getAllDivelog, getSingleDivelog }  from './loaders/divelog'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/profile',
        element:<Profile />,
        loader: getAllDivelog
      },
      {
        path:'/divelog/:divelogId',
        element:<DivelogSingle />,
        loader: async({ params })=> getSingleDivelog(params.divelogId)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
