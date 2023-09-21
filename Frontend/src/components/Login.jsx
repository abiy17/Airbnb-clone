import { useContext, useEffect,useState } from "preact/hooks";
import MyContext from "../context";
import "aos/dist/aos.css"
import Aos from "aos";
import axios from "axios";
import { FaAirbnb,FaMailBulk,FaLock } from "react-icons/fa";
import swal from "sweetalert2"
function Login() {
    const [ loginError,setloginError ] = useState(false)
    const [ errorType,seterrorType ] = useState("")
    const { loginModal,setloginModal,email,setemail,user,setuser,password,setpassword } = useContext(MyContext)
    useEffect(()=>{
        Aos.init();
    },[loginModal])
    const HandleSubmit =(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/login`,{ email,password }).then(res => {
            localStorage.setItem(`user`,JSON.stringify(res))
            setuser({
                user: res
            })
            console.log(res)
            setloginModal(false)
            setloginError(false)
            swal.fire({
                title: `Welcome Boss`,
                text: `you are currently logged in`,
                icon: "success",
                button: "Aww yiss!",
              });
        }).catch(err =>{
            setloginError(true)
            console.log(err)
            seterrorType(err.response.data.mssge)
        })
    }
    return ( 
        <div data-aos="fade-up" className={loginModal ? "overlay-login" : "hidden"}>
            <div className="w-[40%] overflow-y-scroll rounded-xl bg-white h-[25em] mt-24 m-auto">
                <div className="w-6 flex justify-center items-center duration-300 h-6 relative left-14 top-10 hover:bg-slate-50 rounded-full">
                    <p onClick={()=>{setloginModal(false)}} className="font-bold cursor-pointer">X</p>
                </div>
                <FaAirbnb className="text-6xl mt-5 w-24 m-auto text-red-400"/>
                <p className="text-center mb-5 text-4xl text-red-400">airbnb</p>
                <form onSubmit={HandleSubmit}>
                    <div className="w-[65%] flex items-center mt-3 bg-stone-100 h-12 rounded-lg m-auto">
                        <FaMailBulk className="ml-5 text-stone-500"/>
                        <input value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder= "email"  type="text" className="w-[85%] outline-none font-mono bg-stone-100 h-12 rounded-lg ml-5" required/>
                    </div>
                    <div className="w-[65%] flex items-center mt-3 bg-stone-100 h-12 rounded-lg m-auto">
                        <FaLock className="ml-5 text-stone-500"/>
                        <input value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder= "password"  type="password" className= "w-[85%] outline-none font-mono bg-stone-100 h-12 rounded-lg ml-5 placeholder:firstname"  required/>
                    </div>
                    <div className={loginError ? "w-[65%] flex items-center mt-3 border-red-500 font-mono pl-3 border-2  h-12 rounded-lg m-auto" : "hidden"}>
                        <p>{errorType}</p>
                    </div>
                    <button type="submit" className="w-10/12 mt-3 bg-red-400 text-white rounded-lg p-3 hover:opacity-80 relative left-[3em] duration-300">Log-in</button>
                </form>
            </div>
        </div>
     );
}

export default Login;