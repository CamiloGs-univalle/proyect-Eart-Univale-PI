import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from './Assets/Pages/Login/jsx/Login';



const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login",element: <Login />,},
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
