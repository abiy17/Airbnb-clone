import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoShield } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { useContext } from "preact/hooks";
import MyContext from "../context";
function PersonalMain() {
    const { user } = useContext(MyContext)
    return (
        <div className="min-h-[30em] gap-3 w-10/12 m-auto mt-10 flex flex-col">
            <div className="w-5/12 h-[6em] ml-10 flex flex-col relative left-5">
                <div className="flex gap-3 items-center text-[13px] font-medium">
                    <NavLink to="/Account"><p className="hover:underline cursor-pointer">Account</p></NavLink>
                    <MdOutlineKeyboardArrowRight className="text-stone-500"/>
                    <p>Personal Info</p>
                </div>
                <p className="text-[32px] font-sans font-bold text-slate-900">Personal Info</p>
            </div>
            <div className="flex gap-24 w-11/12 m-auto">
                <div className="w-7/12 h-[30em] flex flex-col ml-5 mt-5">
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex justify-between w-full h-16">
                            <div className="flex flex-col">
                                <p>Legal name</p>
                                <p>{user.user.username}</p>
                            </div>
                            <p className="underline cursor-pointer font-medium">Edit</p>
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex justify-between w-full h-16">
                            <div className="flex flex-col">
                                <p>Email address</p>
                                <p>{user.user.email}</p>
                            </div>
                            <p className="underline cursor-pointer font-medium">Edit</p>
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex justify-between w-full h-16">
                            <div className="flex flex-col">
                                <p>Phone number</p>
                                <p>+{user.user.phoneNumber}</p>
                            </div>
                            <p className="underline cursor-pointer font-medium">Edit</p>
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex justify-between w-full h-16">
                            <div className="flex flex-col">
                                <p>Government Id</p>
                                {user.user.isVerified ? <p>Provided</p> : <p>Not Provided</p>}
                            </div>
                            { user.user.isVerified ? "" : <p className="underline cursor-pointer font-medium">Edit</p> }
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex justify-between w-full h-16">
                            <div className="flex flex-col">
                                <p>{user.user.Profile[0].placeOfLiving}</p>
                                <p>Not provided</p>
                            </div>
                            <p className="underline cursor-pointer font-medium">Edit</p>
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex justify-between w-full h-16">
                            <div className="flex flex-col">
                                <p>Emergency contact</p>
                                <p>Not Provided</p>
                            </div>
                            <p className="underline cursor-pointer font-medium">Edit</p>
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                </div>
                <div className="w-4/12 h-[55em] flex flex-col gap-3 rounded-2xl border-[1px] border-stone-300">
                    <div className="w-11/12 h-[15em]">
                        <div className="w-full ml-3 mt-6 h-1/3 m-auto"><IoShield className="text-[4em] text-rose-600"/></div>
                        <div className="w-full ml-3 mt-2 h-1/3 m-auto font-medium"><p className="text-2xl">Why isn’t my info shown here?</p></div>
                        <div className="w-full ml-3 mt-2 h-1/4 m-auto text-stone-500">We’re hiding some account details to protect your identity.</div>
                    </div>
                    <div className="w-11/12 h-[1px] bg-stone-200 m-auto"></div>
                    <div className="w-11/12 h-[17em]">
                        <div className="w-full ml-3 mt-2 h-1/4 m-auto"><IoMdLock className="text-[4em] text-rose-600"/></div>
                        <div className="w-full ml-3 mt-2 h-1/5 m-auto text-2xl font-medium mb-4">Which details can be edited?</div>
                        <div className="w-full ml-3 mt-2 h-2/4 m-auto text-stone-500"><p>Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting.</p></div>
                    </div>
                    <div className="w-11/12 h-[1px] bg-stone-200 m-auto"></div>
                    <div className="w-11/12 h-[15em]">
                        <div className="w-full ml-3 h-1/3 m-auto"><IoEye className="text-[4em] text-rose-600"/></div>
                        <div className="w-full ml-3 mb-7 h-1/5 m-auto text-2xl font-medium">What info is shared with others?</div>
                        <div className="w-full ml-3 mt-2 h-1/4 m-auto text-stone-500"><p>Airbnb only releases contact information for Hosts and guests after a reservation is confirmed.</p></div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default PersonalMain;