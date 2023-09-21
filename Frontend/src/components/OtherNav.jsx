import { FaAirbnb,FaUserCircle,FaQuestion,FaPowerOff } from "react-icons/fa";
import MyContext from "../context";
import { useContext,useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos";
import { useNavigate } from "react-router-dom";
function OtherNav() {
    const { Profilemodal,setProfilemodal,user,setuser,Logout } = useContext(MyContext)
    useEffect(()=>{
        Aos.init();
    },[Profilemodal])
    const Navigate = useNavigate()
    console.log(user)
    return ( 
            <div className="flex gap-[5em] justify-around items-center w-full h-[5em] shadow-sm sticky top-0 bg-white z-10">
                <div onClick={()=>Navigate(-1)} className="text-red-500 flex gap-1 items-center cursor-pointer">
                    <FaAirbnb className="text-4xl"/>
                    <p className="font-bold text-2xl">airbnb</p>
                </div>
                <div className="relative lg:left-[17em] cursor-pointer hover:bg-stone-50 duration-300 p-3 rounded-3xl font-sans">
                    <p>Swich to Hosting</p>
                </div>
                <div className="flex flex-col relative left-[-2em]">
            { user.user === null ? "" : <div onClick={()=>{
                setProfilemodal(!Profilemodal)
                console.log(Profilemodal)
                }}  className="flex gap-3 hover:shadow-lg duration-200 rounded-3xl p-3 h-11 cursor-pointer border-[1px]  justify-center items-center">
                <p  className="font-bold font-sans">{user.user.data.user.username}</p>
                <FaUserCircle className="text-2xl"/>
            </div>}
                <div data-aos="fade-right" className={Profilemodal ? "w-[12em] bg-white profilemodal absolute top-16 float-right rounded-lg shadow-xl h-[15em] z-50 border-[1px]" : "hidden"}>
                            <ul className="">
                                <li  className="w-full cursor-pointer h-10 hover:bg-stone-100 pl-5 pt-2 mt-2 duration-300">WishLists</li>
                                <li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-2 duration-300">Account</li>
                                <li className="w-full cursor-pointer flex gap-2 h-10 hover:bg-stone-100 pl-5 pt-2 duration-300">Manage Listing</li>
                                <p className="text-center text-stone-300">-------------------------------------</p>
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