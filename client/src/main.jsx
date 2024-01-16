import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//Styles
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

//Page Components
import App from './App.jsx'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import DivelogSingle from './components/DivelogSingle.jsx'
import DivelogCreate from './components/DivelogCreate'
import DivelogEdit from './components/DivelogEdit'

//Loaders
import {getAllDivelog, getSingleDivelog}  from './utilities/loaders/divelog.js'

//Action
import { registerUser, loginUser } from './utilities/actions/auth.js'
import {createDivelog, editDivelog} from './utilities/actions/divelog.js'



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
        element:<Login />,
        action: async ({ request }) => loginUser(request),
      },
      {
        path:'/register',
        element:<Register />,
        action: async ({ request }) => registerUser(request),
      },
      {
        path:'/profile',
        element:<Profile />,
        loader: getAllDivelog
      },
      {
        path:'/divelog/create',
        element:<DivelogCreate />,
        action: async ({ request }) => createDivelog(request),
      },
      {
        path:'/divelog/:divelogId',
        element:<DivelogEdit />,
        action: async ({ request, params }) => editDivelog(request, params.divelogId),
        loader: async ({ params }) => getSingleDivelog(params.divelogId)
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
