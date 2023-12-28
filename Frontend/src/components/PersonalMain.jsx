import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoShield } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { useContext,useState } from "preact/hooks";
import MyContext from "../context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
function PersonalMain() {
    const { user,currentUser,setuser } = useContext(MyContext)
    const [ isEditone,setisEditone ] = useState(false)
    const [ isEditTwo,setisEditTwo ] = useState(false)
    const [ isEditThree,setisEditThree ] = useState(false)
    const [ isEditFour,setisEditFour ] = useState(false)
    const [ isEditFive,setisEditFive ] = useState(false)

    const [ username,setusername ] = useState("")
    const [ email,setemail ] = useState("")
    const [ Address,setAddress ] = useState("")
    const [ Contact,setContact ] = useState("")
    const [ PhoneNumber,setphoneNumber ] = useState("")
    const Navigate = useNavigate()
    const HandleSubmit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/EditPersonalInfo/${currentUser._id}`,{ username,email,PhoneNumber,placeOfLiving: Address,EmergencyContact: Contact }).then(res =>{
            if(res.status === 200){
                localStorage.setItem(`user`,JSON.stringify(res.data.newUserInfo))
                setuser({
                    user: res.data.newUserInfo
                })
                toast.success('personal info Edited sucessfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                setTimeout(() => {
                    Navigate(-1)
                }, 3000);
            }
            else{
                toast.error('SomeThing Went Wrong', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        })
    }
    return (
        <div className="min-h-[44em] gap-3 w-10/12 m-auto mt-10 flex flex-col">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
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
                    <form onSubmit={HandleSubmit}>
                    <div className="w-full flex flex-col gap-4">
                        <div className={ isEditone ? "flex justify-between w-full h-36" : "flex justify-between w-full h-16" }>
                            <div className="flex flex-col">
                                <p>Legal name</p>
                                <div className={ isEditone ? "block" : "hidden" }>
                                    <p className="text-sm mt-4">This is the name on your travel document, which could be a license or a passport.</p>
                                    <div className="w-11/12 rounded-xl p-4 bg-stone-50 outline-none mt-3 border-[1px] border-stone-500">
                                        <p className="text-sm text-stone-600">Enter your name</p>
                                        <input onChange={(e)=>{ setusername(e.target.value) }} placeholder="Legal name" type="text" className="w-11/12 rounded-xl bg-stone-50 outline-none"/>
                                    </div>
                                </div>
                                <p className={ isEditone ? "hidden" : "block" }>{user.user.username}</p>
                                
                            </div>
                            
                            {isEditone ? <p onClick={()=>setisEditone(false)}  className="underline cursor-pointer font-medium">Cancel</p> :  <p onClick={()=>setisEditone(true)}  className="underline cursor-pointer font-medium">Edit</p>}
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className={ isEditTwo ? "flex justify-between w-full h-36" : "flex justify-between w-full h-16" }>
                            <div className="flex flex-col">
                                <p>Email address</p>
                                <div className={ isEditTwo ? "block" : "hidden" }>
                                    <p className="text-sm mt-4">Use an address you’ll always have access to.</p>
                                    <div className="w-11/12 rounded-xl p-4 bg-stone-50 outline-none mt-3 border-[1px] border-stone-500">
                                        <p className="text-sm text-stone-600">Enter your Email</p>
                                        <input onChange={(e)=>setemail(e.target.value)} placeholder="Email" type="text" className="w-11/12 rounded-xl bg-stone-50 outline-none"/>
                                    </div>
                                </div>
                                <p className={ isEditTwo ? "hidden" : "block" }>{user.user.email}</p>
                            </div>
                            {isEditTwo ? <p onClick={()=>setisEditTwo(false)}  className="underline cursor-pointer font-medium">Cancel</p> :  <p onClick={()=>setisEditTwo(true)}  className="underline cursor-pointer font-medium">Edit</p>}
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className={ isEditThree ? "flex justify-between w-full h-40" : "flex justify-between w-full h-16" }>
                            <div className="flex flex-col">
                                <p>Phone number</p>
                                <div className={ isEditThree ? "block" : "hidden" }>
                                    <p className="text-sm mt-4">Contact number (for confirmed guests and Airbnb to get in touch). You can add other numbers and choose how they’re used.</p>
                                    <div className="w-11/12 rounded-xl p-4 bg-stone-50 outline-none mt-3 border-[1px] border-stone-500">
                                        <p className="text-sm text-stone-600">Enter your Phone Number</p>
                                        <input onChange={(e)=>setphoneNumber(e.target.value)} placeholder="Phone Number" type="text" className="w-11/12 rounded-xl bg-stone-50 outline-none"/>
                                    </div>
                                </div>
                                <p className={ isEditThree ? "hidden" : "block" }>+{user.user.phoneNumber}</p>
                            </div>
                            {isEditThree ? <p onClick={()=>setisEditThree(false)}  className="underline cursor-pointer font-medium">Cancel</p> :  <p onClick={()=>setisEditThree(true)}  className="underline cursor-pointer font-medium">Edit</p>}
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex justify-between w-full h-16" >
                            <div className="flex flex-col">
                                <p>Government Id</p>
                                {user.user.isVerified ? <p>Provided</p> : <p>Not Provided</p>}
                            </div>
                            { user.user.isVerified ? "" : <p className="underline cursor-pointer font-medium">Edit</p> }
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className={ isEditFour ? "flex justify-between w-full h-36" : "flex justify-between w-full h-16" }>
                            <div className="flex flex-col">
                                <p>user Address</p>
                                <div className={ isEditFour ? "block" : "hidden" }>
                                    <p className="text-sm mt-4">This is the name on your travel document, which could be a license or a passport.</p>
                                    <div className="w-11/12 rounded-xl p-4 bg-stone-50 outline-none mt-3 border-[1px] border-stone-500">
                                        <p className="text-sm text-stone-600">Enter your Address</p>
                                        <input onChange={(e)=>setAddress(e.target.value)} placeholder="Address" type="text" className="w-11/12 rounded-xl bg-stone-50 outline-none"/>
                                    </div>
                                </div>
                                { isEditFour ? "" : <p>{user.user.Profile[0].placeOfLiving}</p> }
                            </div>
                            {isEditFour ? <p onClick={()=>setisEditFour(false)}  className="underline cursor-pointer font-medium">Cancel</p> :  <p onClick={()=>setisEditFour(true)}  className="underline cursor-pointer font-medium">Edit</p>}
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className={ isEditFive ? "flex justify-between w-full h-36" : "flex justify-between w-full h-16" }>
                            <div className="flex flex-col">
                                <p>Emergency contact</p>
                                <div className={ isEditFive ? "block" : "hidden" }>
                                    <p className="text-sm mt-4">A trusted contact we can alert in an urgent situation.</p>
                                    <div className="w-11/12 rounded-xl p-4 bg-stone-50 outline-none mt-3 border-[1px] border-stone-500">
                                        <p className="text-sm text-stone-600">Enter Emergency Contact</p>
                                        <input onChange={(e)=>setContact(e.target.value)} placeholder="Emergency Contact" type="number" className="w-11/12 rounded-xl bg-stone-50 outline-none"/>
                                    </div>
                                </div>
                                <p className={ isEditFive ? "hidden" : "block" }>Not Provided</p>
                            </div>
                            {isEditFive ? <p onClick={()=>setisEditFive(false)}  className="underline cursor-pointer font-medium">Cancel</p> :  <p onClick={()=>setisEditFive(true)}  className="underline cursor-pointer font-medium">Edit</p>}
                        </div>
                        <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
                    </div>
                    <button type="submit" className="bg-black p-2 w-3/12 text-white font-semibold rounded-xl hover:scale-105 duration-300 active:scale-100">Save</button>
                    </form>
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