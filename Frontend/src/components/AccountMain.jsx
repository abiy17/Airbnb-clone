import { NavLink } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { AiFillNotification } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { BsToggles } from "react-icons/bs";
import { MdTableRestaurant } from "react-icons/md";
import { VscGraph } from "react-icons/vsc"
import { useContext } from "preact/hooks"
import MyContext from "../context";
function AccountMain() {
    const { user } = useContext(MyContext)
    return ( 
        <div className="min-h-[30em] text-gray-900 flex flex-col w-10/12 m-auto mt-5 relative left-7">
            <div className="w-5/12 h-[10em]">
                <p className="font-semibold mt-10 ml-10 text-4xl ">Account</p>
                <div className="flex gap-1 ml-10 mt-3">
                    <p className="font-semibold text-lg">{user.user === null ? "" : user.user.username}</p>,
                    <p className="text-lg">{user.user === null ? "" : user.user.email}</p>
                    <NavLink to="/profile" className="font-bold text-stone-700 underline text-lg">Go to Profile</NavLink>
                </div>
            </div>
            <div className="w-11/12 relative left-10 h-[40em] grid grid-cols-3 gap-1 mt-5">
                <NavLink to='/Account/PersonalInfo'>
                    <div className="w-11/12 cursor-pointer h-[10em] shadow-xl rounded-xl flex flex-col">
                        <div className="w-10/12 m-auto h-1/3">
                            <GrContactInfo className="text-[2.6em]"/>
                        </div>
                        <div className="h-1/2 flex flex-col w-11/12 m-auto">
                            <p className="font-bold">Personal Info</p>
                            <p className="text-stone-500">Provide Personal Details and how we can reach you</p>
                        </div>
                    </div>
                </NavLink>
                <div className="w-11/12 cursor-pointer h-[10em] shadow-xl rounded-xl">
                    <div className="w-10/12 m-auto h-1/3">
                            <MdOutlineSecurity className="text-[2.6em]"/>
                        </div>
                        <div className="h-1/2 flex flex-col w-11/12 m-auto">
                            <p className="font-bold">Login & security</p>
                            <p className="text-stone-500">Update your Password adn Secure your account</p>
                    </div>
                </div>
                <div className="w-11/12 h-[10em] shadow-xl rounded-xl cursor-pointer">
                    <div className="w-10/12 m-auto h-1/3">
                        <FaMoneyCheckAlt className="text-[2.6em]"/>
                    </div>
                    <div className="h-1/2 flex flex-col w-11/12 m-auto">
                        <p className="font-bold">Payments & payouts</p>
                        <p className="text-stone-500">Review payments,Payouts,coupons and gift cards</p>
                    </div>
                </div>
                <div className="w-11/12 h-[10em] shadow-xl rounded-xl cursor-pointer">
                    <div className="w-10/12 m-auto h-1/3">
                        <CiFileOn className="text-[2.6em]"/>
                    </div>
                    <div className="h-1/2 flex flex-col w-11/12 m-auto">
                        <p className="font-bold">Taxes</p>
                        <p className="text-stone-500">Manage taxPayer information and tax documents</p>
                    </div>
                </div>
                <div className="w-11/12 h-[10em] shadow-xl rounded-xl cursor-pointer">
                    <div className="w-10/12 m-auto h-1/3">
                        <AiFillNotification className="text-[2.6em]"/>
                    </div>
                    <div className="h-1/2 flex flex-col w-11/12 m-auto">
                        <p className="font-bold">Notifications</p>
                        <p className="text-stone-500">Choose notification preference and how you want to be contacted</p>
                    </div>
                </div>
                <div className="w-11/12 h-[10em] shadow-xl rounded-xl cursor-pointer">
                    <div className="w-10/12 m-auto h-1/3">
                        <FaEye className="text-[2.6em]"/>
                    </div>
                    <div className="h-1/2 flex flex-col w-11/12 m-auto">
                        <p className="font-bold">Privacy & sharing</p>
                        <p className="text-stone-500">Manage your  personal Data,connected service,and data sharing settings</p>
                    </div>
                </div>
                <div className="w-11/12 h-[10em] shadow-xl rounded-xl cursor-pointer">
                    <div className="w-10/12 m-auto h-1/3">
                        <BsToggles className="text-[2.6em]"/>
                    </div>
                    <div className="h-1/2 flex flex-col w-11/12 m-auto">
                        <p className="font-bold">Global Preference</p>
                        <p className="text-stone-500">Set your default language,currency and timezone</p>
                    </div>
                </div>
                <div className="w-11/12 h-[10em] shadow-xl rounded-xl cursor-pointer">
                    <div className="w-10/12 m-auto h-1/3">
                        <MdTableRestaurant className="text-[2.6em]"/>
                    </div>
                    <div className="h-1/2 flex flex-col w-11/12 m-auto">
                        <p className="font-bold">Travel for work</p>
                        <p className="text-stone-500">Add a work email for business trip and benefits</p>
                    </div>
                </div>
                <div className="w-11/12 h-[10em] shadow-xl rounded-xl cursor-pointer">
                    <div className="w-10/12 m-auto h-1/3">
                        <VscGraph className="text-[2.6em]"/>
                    </div>
                    <div className="h-1/2 flex flex-col w-11/12 m-auto">
                        <p className="font-bold">Professional hostin tools</p>
                        <p className="text-stone-500">Get professional tools if you manage several properties on Airbnb</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AccountMain;