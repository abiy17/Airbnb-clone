import { FaAirbnb,FaUserCircle,FaQuestion,FaPowerOff } from "react-icons/fa";
import MyContext from "../context";
import { useContext,useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos";
import { NavLink, useNavigate } from "react-router-dom";
function OtherNav() {
    const { Profilemodal,setProfilemodal,user,setuser,Logout,currentUser } = useContext(MyContext)
    useEffect(()=>{
        Aos.init();
    },[Profilemodal])
    const Navigate = useNavigate()
    console.log(user)
    return ( 
            <div className="flex justify-between items-center w-full h-[5em] shadow-sm sticky top-0 bg-white z-10">
                <div onClick={()=>Navigate(-1)} className="text-red-400 ml-20 flex gap-1 items-center cursor-pointer">
                    <FaAirbnb className="text-4xl"/>
                    <p className="font-bold text-2xl">airbnb</p>
                </div>
                <div className="flex flex-col relative left-[-2em]">
            { user.user === null ? "" : <div onClick={()=>{
                setProfilemodal(!Profilemodal)
                }}  className="flex relative left-[-2em] gap-3 hover:shadow-lg duration-200 rounded-3xl p-3 h-11 cursor-pointer border-[1px]  justify-center items-center">
                <p  className="font-bold font-sans">{user.user.username}</p>
                { currentUser === undefined || currentUser.Profile.length === 0 ? <FaUserCircle className="text-2xl"/> :   <img src={ currentUser.Profile[0].image } alt="" className="w-8 h-8 rounded-full"/>}
            </div>}
                <div data-aos="fade-right" className={Profilemodal ? "w-[12em] bg-white profilemodal absolute top-16 left-[-4em] float-right rounded-lg shadow-xl h-[20em] z-50 border-[1px]" : "hidden"}>
                            <ul className="">
                                <li onClick={()=>Navigate(`/profile`)}  className="w-full cursor-pointer h-10 hover:bg-stone-100 pl-5 pt-2 mt-2 duration-300">Profile</li>
                                <li onClick={()=>Navigate(`/wishlists`)}  className="w-full cursor-pointer h-10 hover:bg-stone-100 pl-5 pt-2 duration-300">WishLists</li>
                                <p className="text-center text-stone-300">-------------------------</p>
                                <NavLink to="/account"><li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-2 duration-300">Account</li></NavLink>
                                <li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-2 duration-300">Manage Listing</li>
                                <p className="text-center text-stone-300">------------------------</p>
                                <li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-4 duration-300"><FaQuestion />Help Center</li>
                                <li onClick={()=>{
                                    Navigate(`/`)
                                    Logout()
                                    }} className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-4 duration-300"><FaPowerOff />Log out</li>
                            </ul>
                </div>
            </div>
        </div>
     );
}

export default OtherNav;