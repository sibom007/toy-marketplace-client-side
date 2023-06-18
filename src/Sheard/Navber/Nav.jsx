import { Link } from "react-router-dom"
import logo from '../../../public/Toy-world.-ogo.png.png'
import { useContext } from "react";
import { MyAuthcontext } from "../../Provider/Authprovider";


const Nav = () => {

  const { user, Logout } = useContext(MyAuthcontext)
  console.log(user);

  const Logouthandler = () => {
    Logout()
      .then()
      .catch(error => console.log(error))
  }


  const navbar = <>
    <li><Link>Home</Link></li>
    {user ?
      <>
        <li> <Link onClick={Logouthandler}>Logout</Link></li>
        <li><Link to={"/Mytoy"}>My Toys</Link></li>

      </>
      :
      <li><Link to={"/Login"}>Login</Link></li>

    }
    <li><Link to={"/Addtoy"}> Add A Toy</Link></li>
    <li><Link to={"/Alltoydata"}>All Toys</Link></li>


    <li><Link to={"/Blog"}>Blog</Link></li>

  </>
  return (
    <div className="navbar bg-yellow-100 rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navbar}
          </ul>
        </div>
        <img className="h-16 w-20" src={logo} alt="" />
        <a className="  text-2xl font-bold">Toy-World</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {navbar}
        </ul>
      </div>
      <div className=" tooltip tooltip-bottom" data-tip={user?.displayName}>
        <img className="w-16 rounded-full " src={user?.photoURL} alt="" />

      </div>
    </div>
  );
};

export default Nav;