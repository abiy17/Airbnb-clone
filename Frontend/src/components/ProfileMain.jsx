import { FaCamera, FaHandSparkles, FaPlaceOfWorship, FaSpeakap, FaWodu } from "react-icons/fa";
import { Fa6, FaQuestion, FaSchool, FaMusic } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai"
import { RiSpeakLine } from "react-icons/ri"
import { BiSolidBookAlt,BiLaugh } from "react-icons/bi"
import { useContext } from "preact/hooks";
import MyContext from "../context";
import Correct from "../assets/correct.svg"
import ProfileFooter from "./ProfileFooter";
import { NavLink } from "react-router-dom";
function ProfileMain() {
    const { user,setuser,currentUser } = useContext(MyContext)
    return ( 
    <>
        <div className="flex col lg:flex">
            <div className="flex flex-col gap-4 w-4/12 m-auto mt-10">
                <div className="w-[20.7em] relative left-[-1em] profile-div h-[15em] rounded-3xl">
                    <div className="flex gap-2 h-full m-auto">
                        <div className="ml-12">
                        { currentUser === null ? <div className=""></div> : currentUser.Profile.length === 0 ? <div className="w-28 mt-5 h-28 rounded-full bg-stone-800">
                            <p className="text-center text-white font-bold text-6xl pt-6">{user.user === null ? <p>loading..</p> : user.user.username.charAt(0)}</p>
                        </div> : <img src={ currentUser === undefined ? "" : currentUser.Profile[0].image } alt="" className="w-32 mt-10 ml-3 h-20 rounded-full"/> }
                        <div className="ml-5 mt-3">
                            <p className="font-bold font-sans text-2xl">{user.user === null ? <p>loading..</p> : user.user.username.slice(0,5)}</p>
                            <p className="font-sans">Guest</p>
                        </div>
                        </div>
                        <div className="h-full w-full">
                            <div className="font-sans mt-20 ml-10">
                                <p className="font-bold text-2xl">Welcome</p>
                                <p className="text-[.7em]">to airbnb</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[20.7em] relative left-[-1em] border-stone-300 mt-4 h-[450px] border-[1px] rounded-xl flex flex-col">
                    <div className="w-11/12 h-[10em] m-auto">
                        <p className="font-sans font-semibold ml-3 w-11/12 text-[1.5em]">{user.user === null ? <p>Loading..</p> : user.user.username}'s' confirmed information</p>
                        <div className="mt-4 ml-4">
                            <p className="flex items-center gap-4">
                                <img src={Correct} alt="" className="w-8"/>
                                Email address
                            </p>
                            <p className="flex items-center gap-4">
                                <img src={Correct} alt="" className="w-8"/>
                                Phone number
                            </p>
                            <p className={ user.user.isVerified ? "flex items-center gap-4" : "hidden" }>
                                <img src={Correct} alt="" className="w-8"/>
                                user Verified
                            </p>
                        </div>
                    </div>
                    <p className="text-stone-300 ml-10">-----------------------------------------</p>
                    <div className={ user.user.isVerified ? "hidden" : "w-11/12 h-[13em] m-auto"}>
                        <p className="font-sans font-semibold ml-3 w-11/12 text-[1.5em]">Verify your identity</p>
                        <p className="ml-4 mt-10 w-11/12">Before you book or Host on Airbnb, you’ll need to complete this step.</p>
                        <NavLink to="/getVerified"><button className="ml-4 border-[1px] rounded-lg p-3 mt-10 border-black font-sans font-medium hover:bg-stone-100 duration-300 w-5/12">Get Verified</button></NavLink>
                    </div>
                </div>
            </div>
            { currentUser === null ? <div className=""></div> : currentUser === undefined ||currentUser.Profile.length === 0  ? <div className="w-6/12 h-[10vh] relative top-[18em]">
                <div className="ml-3">
                    <p className="text-stone-300">-------------------------------------------------------------------</p>
                    <p className="font-sans font-bold mt-6 ml-3 w-5/12 text-[1.3em]">It's time to create your profile</p>
                    <p className="w-72 text-stone-500 ml-3 mt-5">Your Airbnb profile is an important part of every reservation. Create yours to help other Hosts and guests get to know you.</p>
                    <NavLink to="createProfile"><button className="w-3/12 rounded-xl ml-3 mt-6 h-12 bg-pink-600 text-white font-semibold">Create Profile</button></NavLink>
                </div>
            </div> : <div className="w-6/12 relative left-[-9em] h-[50em]">
                <div className="mt-10 h-[13%] flex flex-col gap-4">
                    <p className="font-bold text-2xl">About {user.user === null ? <p>loading..</p> :  user.user.username }</p>
                    <NavLink to="/profile/createProfile"><button className=" p-2 rounded-xl w-28 text-[13px] hover:bg-stone-100 duration-700 border-[1px] border-black">Edit profile</button></NavLink>
                </div>
                <div className="mt-10 h-[65%] flex flex-col gap-4">
                        <div className="w-11/12 flex gap-7 rounded-lg h-16 font-semibold">
                            <FaSchool className="text-stone-900 relative left-5 text-center text-xl"/>
                            <p>Where did you go to school : { currentUser.Profile[0].school }</p>
                        </div>
                        <div className="w-11/12 flex gap-7 rounded-lg h-16 font-semibold">
                            <FaQuestion className="text-stone-900 relative left-5 text-center text-xl"/>
                            <p>Where you live : { currentUser.Profile[0].placeOfLiving }</p>
                        </div>
                        <div className="w-11/12 flex gap-7 rounded-lg h-16 font-semibold">
                            <AiOutlineHeart className="text-stone-900 relative left-5 text-center text-2xl"/>
                            <p>What are you obsessed with : { currentUser.Profile[0].Obsession }</p>
                        </div>
                        <div className="w-11/12 flex gap-7 rounded-lg h-16 font-semibold">
                            <FaHandSparkles className="text-stone-900 relative left-5 text-center text-xl"/>
                            <p>What’s your most usefull skill : { currentUser.Profile[0].skil }</p>
                        </div>
                        <div className="w-11/12 flex gap-7 rounded-lg h-16 font-semibold">
                            <RiSpeakLine className="text-stone-900 relative left-5 text-center text-2xl"/>
                            <p>Languages you speak : { currentUser.Profile[0].language }</p>
                        </div>
                        <div className="w-11/12 flex gap-7 rounded-lg h-16 font-semibold">
                            <FaMusic className="text-stone-900 relative left-5 text-center text-xl"/>
                            <p>What was your favorite song : { currentUser.Profile[0].song }</p>
                        </div>
                        <div className="w-11/12 flex gap-7 rounded-lg h-16 font-semibold">
                            <BiSolidBookAlt className="text-stone-900 relative left-5 text-center text-xl"/>
                            <p>What would your biography title be : { currentUser.Profile[0].BiographyTitle }</p>
                        </div>
                        <div className="w-11/12 flex gap-7 font-semibold rounded-lg h-16">
                            <BiLaugh className="text-stone-900 relative left-5 text-center text-xl"/>
                            <p>What’s a fun fact about you : { currentUser.Profile[0].funFact }</p>
                        </div>
                </div>
            </div> }
        </div>
        <ProfileFooter />
    </>
        
     );
}

export default ProfileMain;