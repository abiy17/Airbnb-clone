import { FaCamera, FaHandSparkles, FaPlaceOfWorship, FaSpeakap, FaWodu } from "react-icons/fa";
import { Fa6, FaQuestion, FaSchool, FaMusic } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai"
import { RiSpeakLine } from "react-icons/ri"
import { BiSolidBookAlt,BiLaugh } from "react-icons/bi"
import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function CreateMain() {
    const { currentUser,setcurrentUser } = useContext(MyContext)
    const [ UserInfo,setUserInfo ] = useState(currentUser.Profile[0])
    const [ image,setimage ] = useState([])
    const [ school,setschool ] = useState("")
    const [ Obsession,setObsession ] = useState("")
    const [ placeOfLiving,setplaceOfLiving ] = useState("")
    const [ skil,setskil ] = useState("")
    const [ language,setlanguage ] = useState("")
    const [ song,setsong ] = useState("")
    const [ BiographyTitle,setBiographyTitle ] = useState("")
    const [ funFact,setfunFact ] = useState("")
    const Navigate = useNavigate()
    const HandleSubmit=(e)=>{
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("images", image[0]);
        formdata.append("school", school);
        formdata.append("placeOfLiving", placeOfLiving);
        formdata.append("Obsession", Obsession);
        formdata.append("skil", skil);
        formdata.append("language", language);
        formdata.append("song", song);
        formdata.append("BiographyTitle", BiographyTitle);
        formdata.append("funFact", funFact);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch(`http://localhost:5000/createProfile/${currentUser._id}`, requestOptions)
        .then(response => {
            response.json()
            if( response.status === 200 ){
                toast.success('profile Created sucessfully', {
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
                    Navigate(`/`)
                    window.location.reload()
                }, 3000);
            }
            else if( response.status === 400 ){
                toast.error('profile image is required', {
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
            else if( response.status === 500 ){
                toast.error('image file not supported', {
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
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    const Edit=()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "school": UserInfo.school,
        "placeOfLiving": UserInfo.placeOfLiving,
        "Obsession": UserInfo.Obsession,
        "skil": UserInfo.skil,
        "language": UserInfo.language,
        "song": UserInfo.song,
        "BiographyTitle": UserInfo.BiographyTitle,
        "funFact": UserInfo.funFact
        });
        

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`http://localhost:5000/updateProfile/${currentUser._id}`, requestOptions)
        .then(response =>{
            response.json()
            if( response.status === 200 ){
                toast.success('profile Updated sucessfully', {
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
                    window.location.reload()
                }, 3000);
            }
            else if( response.status === 400 ){
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
            else if( response.status === 500 ){
                toast.error('Server error', {
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
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    return ( 
        <form onSubmit={HandleSubmit}>
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
            <div className="w-11/12 h-[80vh] m-auto flex gap-3">
            <div className="w-5/12 h-[70vh]">
            <div className="ml-24">
                <div className="w-48 mt-10 ml-5 h-48 rounded-full bg-stone-800 flex justify-center items-center ">
                { currentUser.Profile.length === 0 ? <p></p> : <img src={UserInfo.image} alt="" className="rounded-full"/>}
                </div>
                <label className="w-24 h-10 rounded-full bg-white z-20 flex gap-3 font-semibold shadow-xl justify-center items-center cursor-pointer relative top-[-1em] left-16">
                <input onChange={(e)=>{ setimage(e.target.files) }} type="file" accept="image/png,image/jpeg,image/JPG" hidden/>
                    <FaCamera />
                    { currentUser.Profile.length === 0 ? <p>Add</p> : <p className="text-sm">Change</p> }  
                </label>
            </div>
            </div>
            <div className="w-7/12 h-[80vh] relative left-[-5em] top-10">
                <div className="">
                    <p className="font-bold text-3xl mb-5">Your profile</p>
                    <p className="w-5/6 text-stone-400 mb-10 text-[18px]">The information you share will be used across Airbnb to help other guests and Hosts get to know you. </p>
                </div>
                <div className="flex gap-5">
                    <div className="w-[50%] flex flex-col gap-4">
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                            <FaSchool className="text-stone-500 relative left-5 text-center text-xl"/>
                            { currentUser.Profile.length === 0 ? <input onChange={(e)=>{ setschool(e.target.value) }} type="text" placeholder="Where did you go to school ?" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> : <input value={UserInfo.school} onChange={(e)=>{ setUserInfo({ ...UserInfo,school:e.target.value })}} type="text" placeholder="" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> }
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                            <FaQuestion className="text-stone-500 relative left-5 text-center text-xl"/>
                            { currentUser.Profile.length === 0 ? <input onChange={(e)=>{ setplaceOfLiving(e.target.value) }} type="text" placeholder="Where you live ?" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>  : <input value={UserInfo.placeOfLiving} onChange={(e)=>{ setUserInfo({ ...UserInfo,placeOfLiving:e.target.value })}} type="text" placeholder="" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> }
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                            <AiOutlineHeart className="text-stone-500 relative left-5 text-center text-2xl"/>
                            { currentUser.Profile.length === 0 ? <input onChange={(e)=>{ setObsession(e.target.value) }} type="text" placeholder="What are you obsessed with ?" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>: <input value={UserInfo.Obsession} onChange={(e)=>{ setUserInfo({ ...UserInfo,Obsession:e.target.value })}} type="text" placeholder="" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> }
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                            <FaHandSparkles className="text-stone-500 relative left-5 text-center text-xl"/>
                            { currentUser.Profile.length === 0 ? <input onChange={(e)=>{ setskil(e.target.value) }}  type="text" placeholder="What’s your most usefull skill ?" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>: <input value={UserInfo.skil} onChange={(e)=>{ setUserInfo({ ...UserInfo,skil:e.target.value })}} type="text" placeholder="" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> }
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-col gap-4">
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                            <RiSpeakLine className="text-stone-500 relative left-5 text-center text-2xl"/>
                            { currentUser.Profile.length === 0 ? <input onChange={(e)=>{ setlanguage(e.target.value) }} type="text" placeholder="Languages you speak ?" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-12 bg-stone-50" required/> : <input value={UserInfo.language} onChange={(e)=>{ setUserInfo({ ...UserInfo,language:e.target.value })}} type="text" placeholder="" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> }
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                            <FaMusic className="text-stone-500 relative left-5 text-center text-xl"/>
                            { currentUser.Profile.length === 0 ? <input onChange={(e)=>{ setsong(e.target.value) }} type="text" placeholder="What was your favorite song ?" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>  : <input value={UserInfo.song} onChange={(e)=>{ setUserInfo({ ...UserInfo,song:e.target.value })}} type="text" placeholder="" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> }
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                            <BiSolidBookAlt className="text-stone-500 relative left-5 text-center text-xl"/>
                            { currentUser.Profile.length === 0 ? <input onChange={(e)=>{ setBiographyTitle(e.target.value) }} type="text" placeholder="What would your biography title be ?" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> : <input value={UserInfo.BiographyTitle} onChange={(e)=>{ setUserInfo({ ...UserInfo,BiographyTitle:e.target.value })}} type="text" placeholder="" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> }
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                            <BiLaugh className="text-stone-500 relative left-5 text-center text-xl"/>
                            { currentUser.Profile.length === 0 ? <input onChange={(e)=>{ setfunFact(e.target.value) }} type="text" placeholder="What’s a fun fact about you ?" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>: <input value={UserInfo.funFact} onChange={(e)=>{ setUserInfo({ ...UserInfo,funFact:e.target.value })}} type="text" placeholder="" className="w-10/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/> }
                        </div>
                    </div>
                </div>
                
                { currentUser.Profile.length === 0 ? <button type="submit" className="w-24 h-12 bg-black text-white rounded-lg font-semibold float-right mt-4">Done</button> : <div onClick={()=>Edit()} className="w-24 h-12 bg-black flex justify-center items-center cursor-pointer text-white rounded-lg font-semibold float-right mt-4">Done</div>}
            </div>
        </div>
        </form>
        
     );
}

export default CreateMain;