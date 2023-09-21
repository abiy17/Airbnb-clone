import { useContext, useState,useEffect } from "react";
import { FaAirbnb,FaBars,FaSearch,FaUserCircle,FaQuestion,FaPowerOff } from "react-icons/fa"
import Signup from "./Sigup";
import MyContext from "../context";
import Login from "./Login";
import "aos/dist/aos.css"
import Aos from "aos";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom"
import axios from "axios";
function Nav() {
    const { Loading,setLoading,listing,setlisting,country,setcountry,Logout,setsignUpModal,modal,setmodal,loginModal,setloginModal,user,setuser,Profilemodal,setProfilemodal } = useContext(MyContext)
    console.log(user)
    useEffect(()=>{
        Aos.init();
    },[Profilemodal])
    const Searching =()=>{
        setLoading(true)
        axios.post(`http://localhost:5000/searching`,{ country }).then(res => {
            console.log(res)
            setlisting(res.data)
            setLoading(false)
        }).catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className="flex justify-around items-center w-full h-[5em] shadow-sm sticky top-0 z-50 bg-white">
            <div className="text-red-500 flex gap-1 items-center cursor-pointer">
                <FaAirbnb className="text-4xl"/>
                <p className="font-bold text-2xl">airbnb</p>
            </div>
            <div className="w-[50%] flex items-center">
                <input onChange={(e)=>setcountry(e.target.value)} placeholder="Search By Country" type="text" className=" rounded-3xl pl-10 font-mono font-semibold w-[90%] h-12 border-[1px] shadow-md outline-1 outline-red-400"/>
                <div className="w-10 hover:opacity-70 duration-300 relative left-[-3em] h-7 flex justify-center items-center rounded-full bg-red-500 text-white">
                    <FaSearch onClick={Searching} className=" cursor-pointer"/>
                </div>
               <a href="https://www.airbnb.com/host/homes" className="w-[29%] duration-300 h-10 hover:bg-stone-50 cursor-pointer font-sans relative flex justify-center items-center rounded-3xl">
                        <p>Airbnb your home</p>
               </a>
            </div>
             { user.user === null ? <div className="flex flex-col relative left-[-2em]">
                <div onClick={()=>{setmodal(!modal)}} className="flex gap-3 hover:shadow-lg duration-200 rounded-3xl w-[5.6em] h-11 cursor-pointer border-[1px]  justify-center items-center">
                    <FaBars />
                    <FaUserCircle className="text-2xl"/>
                </div>
                <div  className={modal ? "w-[10em] bg-white z-auto absolute top-16 rounded-lg shadow-xl h-[10em] border-[1px]" : "hidden"}>
                    <div className="">
                        <ul>
                            <li onClick={()=>{setsignUpModal(true)}} className="w-full cursor-pointer font-semibold h-10 hover:bg-stone-100 pl-5 pt-2 mt-2 duration-300">Sign Up</li>
                            <li onClick={()=>{setloginModal(true)}} className="w-full cursor-pointer font-semibold h-10 hover:bg-stone-100 pl-5 pt-2 mt-2 duration-300">Log In</li>
                            <p className="text-center text-stone-300">-----------------------</p>
                            <li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-2 duration-300"><FaQuestion />Help Center</li>
                        </ul>
                    </div>
                    <div className="absolute top-0">
                        <Signup />
                        <Login />
                    </div>
                </div>
            </div> : <div className="flex flex-col relative left-[-2em]">
            <div onClick={()=>{setProfilemodal(!Profilemodal)}}  className="flex gap-3 hover:shadow-lg duration-200 rounded-3xl p-3 h-11 cursor-pointer border-[1px]  justify-center items-center">
                <p  className="font-bold font-sans">{user.user.data.user.username}</p>
                <FaUserCircle className="text-2xl"/>
                </div>
            <div data-aos="fade-right" className={Profilemodal ? "w-[12em] bg-white profilemodal absolute top-16 float-right rounded-lg shadow-xl h-[20em] z-50 border-[1px]" : "hidden"}>
                    <div className="">
                        <ul>
                            <NavLink onClick={()=>{setProfilemodal(false)}} to="profile"><li  className="w-full cursor-pointer font-semibold h-10 hover:bg-stone-100 pl-5 pt-2 mt-2 duration-300">Profile</li></NavLink>
                            <li  className="w-full cursor-pointer font-semibold h-10 hover:bg-stone-100 pl-5 pt-2 mt-2 duration-300">WishLists</li>
                            <p className="text-center text-stone-300">-------------------------------------</p>
                            <li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-2 duration-300">Account</li>
                            <li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-2 duration-300">Manage Listing</li>
                            <p className="text-center text-stone-300">-------------------------------------</p>
                            <li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-4 duration-300"><FaQuestion />Help Center</li>
                            <li onClick={Logout} className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-4 duration-300"><FaPowerOff />Log out</li>
                        </ul>
                    </div>
                </div>
            </div>}
        </div>
      );
}

export default Nav;