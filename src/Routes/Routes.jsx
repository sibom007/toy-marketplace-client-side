import {
    createBrowserRouter,
  } from "react-router-dom";
import Rendered from "../Layout/Rendered";
import Home from "../page/Home/Home/Home";

import Login from "../page/Home/Login/Login";
import Regester from "../page/Home/Regester/Regester";
import ErrorPage from "../page/Home/Errorpage/Error";
import Blog from "../page/Blog/Blog";
import Addtoy from "../page/Addtoypage/Addtoy";
import Privetrout from "./Privetrout";
import Singlepagedata from "../page/SinglePageData/Singlepagedata";
import Mytoydata from "../page/Mytoy/Mytoydata";
import Updatetoydata from "../page/Updatetoydata/Updatetoydata";
import Alltoydata2 from "../page/Alltoydata2/Alltoydata2";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Rendered />,
      errorElement:<ErrorPage />,
      children:[
        {
            path:'/', 
            element:<Home />
        },
        {
            path:'/Login', 
            element:<Login />
        },
        {
            path:'/Regester', 
            element:<Regester />
        },
        {
            path:'/Blog', 
            element:<Blog />
        },
        {
            path:'/Addtoy', 
            element: <Privetrout><Addtoy /></Privetrout>
        },
        {
          path:'/Alltoydata',
          element:<Alltoydata2></Alltoydata2>
        },
        {
          path:'/Singlepagedata/:id',
          element:<Privetrout><Singlepagedata /></Privetrout>,
          loader:({params})=> fetch(`https://assiment-11-server.vercel.app/Alltoydata/${params.id}`) 
        },
        {
          path:"/Mytoy",
          element:<Mytoydata />
        },
        {
          path:'/Updatetoydata/:id',
          element:<Updatetoydata />,
          loader:({params})=> fetch(`https://assiment-11-server.vercel.app/Mytoys/${params.id}`)
        }
      ]
    },
  ]);
  export default router ;