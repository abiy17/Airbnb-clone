import { useContext } from "preact/hooks";
import MyContext from "../context";
import Correct from "../assets/correct.svg"
import ProfileFooter from "./ProfileFooter";
import { NavLink } from "react-router-dom";
function ProfileMain() {
    const { user,setuser } = useContext(MyContext)
    return ( 
    <>
        <div className="flex col lg:flex">
            <div className="flex flex-col gap-4 w-4/12 m-auto mt-10">
                <div className="w-[20.7em] relative left-[-1em] profile-div h-[15em] rounded-3xl">
                    <div className="flex gap-2 h-full m-auto">
                        <div className="ml-12">
                        <div className="w-28 mt-5 h-28 rounded-full bg-stone-800">
                            <p className="text-center text-white font-bold text-6xl pt-6">C</p>
                        </div>
                        <div className="ml-5 mt-3">
                            <p className="font-bold font-sans text-2xl">{user.user === null ? <p>loading..</p> : user.user.data.user.username.slice(0,5)}</p>
                            <p className="font-sans">Guest</p>
                        </div>
                        </div>
                        <div className="h-full w-full">
                            <div className="font-sans mt-20 ml-10">
                                <p className="font-bold text-2xl">2</p>
                                <p className="text-[.7em]">Days on airbnb</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[20.7em] relative left-[-1em] border-stone-300 mt-4 h-[450px] border-[1px] rounded-xl flex flex-col">
                    <div className="w-11/12 h-[10em] m-auto">
                        <p className="font-sans font-semibold ml-3 w-11/12 text-[1.5em]">{user.user === null ? <p>Loading..</p> : user.user.data.user.username}'s' confirmed information</p>
                        <div className="mt-4 ml-4">
                            <p className="flex items-center gap-4">
                                <img src={Correct} alt="" className="w-8"/>
                                Email address
                            </p>
                            <p className="flex items-center gap-4">
                                <img src={Correct} alt="" className="w-8"/>
                                Phone number
                            </p>
                        </div>
                    </div>
                    <p className="text-stone-300 ml-10">-----------------------------------------------------</p>
                    <div className="w-11/12 h-[13em] m-auto">
                        <p className="font-sans font-semibold ml-3 w-11/12 text-[1.5em]">Verify your identity</p>
                        <p className="ml-4 mt-10 w-11/12">Before you book or Host on Airbnb, you’ll need to complete this step.</p>
                        <button className="ml-4 border-[1px] rounded-lg p-3 mt-10 border-black font-sans font-medium hover:bg-stone-100 duration-300 w-5/12">Get Verified</button>
                    </div>
                </div>
            </div>
            <div className="w-6/12 h-[10vh] relative top-[18em]">
                <div className="ml-3">
                    <p className="text-stone-300">-------------------------------------------------------------------</p>
                    <p className="font-sans font-bold mt-6 ml-3 w-5/12 text-[1.3em]">It's time to create your profile</p>
                    <p className="w-72 text-stone-500 ml-3 mt-5">Your Airbnb profile is an important part of every reservation. Create yours to help other Hosts and guests get to know you.</p>
                    <NavLink to="createProfile"><button className="w-3/12 rounded-xl ml-3 mt-6 h-12 bg-pink-600 text-white font-semibold">Create Profile</button></NavLink>
                </div>
            </div>
        </div>
        <ProfileFooter />
    </>
        
     );
}

export default ProfileMain;