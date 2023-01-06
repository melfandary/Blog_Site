import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";
import Singleblog from "./pages/Singleblog";
import Write from "./pages/Write";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./style.scss"


const PageLayout = () => {
  return(
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/post/:id',
        element: <Singleblog />,
      },
      {
        path: '/write',
        element: <Write />,
      },
      
    ],
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />

      </div>
    
    </div>
  );
}

export default App;
