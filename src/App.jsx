// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import {RouterProvider, createBrowserRouter, createHashRouter} from "react-router-dom"
import Home from './components/Home';
import AddTask from './components/AddTask';
import Layout from './Layout/MainLayout';
import TaskContextProvider from './Context/TaskContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AllTasks from './components/AllTasks';
import SignUp from './components/signUp/SignUp';
import Signin from './components/SignIn/SignIn';
import AuthLayout from './Layout/AuthLayout';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import MainLayout from './Layout/MainLayout';
function App() {
  const routes = createHashRouter([
    {path:'/',element:<MainLayout/>,children:[
      {index:true,element:<ProtectedRoutes> <Home/></ProtectedRoutes>},
      {path :'Home',element:<ProtectedRoutes> <Home/></ProtectedRoutes>},
      {path:'Addtask',element:<ProtectedRoutes> <AddTask/></ProtectedRoutes>},
      {path:'AllTasks',element:<ProtectedRoutes>  <AllTasks/></ProtectedRoutes>}
  
    ]},
    {

      path: '/', element: <AuthLayout />, children: [
        { path: '/signin', element: <Signin /> },
        { path: '/signup', element: <SignUp /> },

      ]
    }
  ])
  return (

    <> 
    
    <TaskContextProvider>

    <RouterProvider router={routes}/>

    </TaskContextProvider>
    

     
    </>
  );
}

export default App;
