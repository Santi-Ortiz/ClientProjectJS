import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import io from 'socket.io-client'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Login from './components/Login.jsx'
import Nasa from './components/Nasa.jsx'
import TestSocket from './components/TestSocket.jsx'

const socket = io.connect("http://localhost:3000");

const router = createBrowserRouter([
  {
    path : '/',
    element : <App socket = {socket} />
  },
  {
    path: '/element',
    element: (<><div>Hola, soy un elementico</div></>)
  },
  {
    path : '/login',
    element : <Login /> 
  },
  {
    path: '/nasa',
    element : <Nasa />
  },
  {
    path: '/socket',
    element: <TestSocket socket={socket}/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
