import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import logo from "../../../../public/1.png"
// import Login from "../Login/Login";
import { useContext } from "react";
import { MyAuthcontext } from "../../../Provider/Authprovider";
import useTitle from "../../../Hooks/useTitle";

const Regester = () => {
    useTitle('Regester')

    const { createuser,Updateprofil } = useContext(MyAuthcontext)
    const location =useLocation();
    const Navigate =useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handlerlogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.url.value;      
        const password = form.password.value;
        createuser(email, password)
        .then(result => {
            const user = result.user;
            Updateprofil(name,photo)
            console.log(user);
            Swal.fire("Regester", '', 'success')
            Navigate(from, { replace: true })
        })
        .catch(error =>{
            Swal.fire(error.message,' ', 'error')
        })
    }


    return (
        <div className="bg-yellow-100 overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">

            <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">

                {/* <!-- product Side --> */}
                <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">

                    <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">

                        <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-yellow-300 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">Regester please</span>

                    </div>
                    {/* <!-- product text --> */}

                    <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">

                        <img src={logo} alt="product" className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 product h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out -mt-32" />
                        {/* <!-- product image --> */}

                        <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
                        {/* <!-- product shadow --> */}
                    </div>

                    <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>

                </div>
                {/* <!-- Product Side End--> */}

                {/* <!-- Login Form --> */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">

                        <div className="w-full space-y-5">

                            <div className="form-caption flex items-end justify-center text-center space-x-3">
                                <span className="text-3xl font-semibold text-gray-700">Regester please</span>
                                {/* <span className="text-base text-gray-800"></span> */}
                            </div>
                            {/* <!-- form caption --> */}
                            <form onSubmit={handlerlogin}>
                                
                                <div className="form-element">
                                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                                        <span className="block text-lg text-gray-800 tracking-wide">Name</span>
                                        <span className="block">
                                            <input type="name" name="name" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" required />
                                        </span>
                                    </label>
                                </div>
                                <div className="form-element">
                                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                                        <span className="block text-lg text-gray-800 tracking-wide">Photo url</span>
                                        <span className="block">
                                            <input type="text" name="url" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" required />
                                        </span>
                                    </label>
                                </div>
                                <div className="form-element">
                                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                                        <span className="block text-lg text-gray-800 tracking-wide">Email</span>
                                        <span className="block">
                                            <input type="email" name="email" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" required/>
                                        </span>
                                    </label>
                                </div>
                                {/* <!-- form element --> */}


                                <div className="form-element">
                                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                                        <span className="block text-lg text-gray-800 tracking-wide">Password</span>
                                        <span className="block">
                                            <input type="password" name="password" className=" mb-5 bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" required/>
                                        </span>
                                    </label>
                                </div>
                                {/* <!-- form element --> */}

                                <div className="form-element">
                                    <div className="w-full lg:w-4/5 block mx-auto flex items-center justify-between">
                                        <label className="block text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                                            <input type="checkbox" name="" id="" />
                                            <span className="block text-gray-800 tracking-wide">Remember me</span>
                                        </label>
                                        <span>Have allReady accound <Link to={"/Login"}><button className=" text-gray-800 tracking-wide inline-block border-b border-gray-300 font-bold">Login</button></Link></span>

                                    </div>
                                </div>
                                {/* <!-- form element --> */}

                                <div className="form-element">
                                    <span className="w-full lg:w-4/5 block mx-auto ">
                                        <input type="submit" className="mt-3 cursor-pointer border-2 border-yellow-200 w-full p-3 bg-yellow-200 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all" />
                                    </span>
                                </div>
                                {/* <!-- form element --> */}
                            </form>

                        </div>

                    </div>
                    {/* <!-- form wrapper --> */}
                </div>

                {/* <!-- Login Form End--> */}


            </div>
           
        </div>
    );
};

export default Regester;