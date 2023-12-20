import { useContext, useState } from "preact/hooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import MyContext from "../context";
function VerifiedMain() {
    const [ gFile,setgFile ] = useState([])
    const { currentUser,setuser } = useContext(MyContext)
    const Navigate = useNavigate()
    window.scroll(0,0)
    const HandleClick =async ()=>{
        console.log(gFile[0])
        var formdata = new FormData();
        formdata.append("GovermentIdFile", gFile[0]);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch(`http://localhost:5000/verifyUser/${currentUser._id}`, requestOptions)
    .then(response => {
        // Check if the response status is 200
        if (response.status === 200) {
            return response.json(); // Return the parsed JSON
        } else {
            // If the status is not 200, throw an error
            throw new Error('Something went wrong');
        }
    })
    .then(res => {
        localStorage.setItem(`user`, JSON.stringify(res));
        setuser({
            user: res
        })
        console.log(res);

        // Now you can perform actions based on the parsed JSON response
        toast.success('User verified successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    })
    .catch(error => {
        console.log('error', error);
        // Handle errors here, and show appropriate toasts or messages
        toast.error('Something went wrong', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    });

    }
    return ( 
        <div className="min-h-[25em] w-10/12 flex m-auto mt-10">
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
            <div className="w-1/2 ml-24 h-[20em]">
                <p className="text-2xl font-semibold">Let’s add your government ID</p>
                <p className="mt-5 w-10/12">We’ll need you to add an official government ID. This step helps make sure you’re really you.</p>
                <div className="w-10/12 h-[7em] border-[1px] border-black rounded-2xl mt-5 flex flex-col gap-1 pl-5">
                    <p className="font-bold text-xl mt-2">Upload an existing photo</p>
                    <div className="flex gap-4 mt-2">
                        <p>Recommended</p>
                        <input type="file" name="" id="" onChange={(e)=>{ setgFile(e.target.files) }}/>
                    </div>
                </div>
                <button onClick={()=>HandleClick()} className="p-3 rounded-2xl bg-black text-white mt-10 hover:opacity-70 duration-300 active:opacity-50">Upload File</button>
            </div>
            <div className="w-1/3 h-[15em]">
            <div className="w-10/12 h-[17em] border-[1px] border-stone-200 rounded-2xl mt-5 flex flex-col gap-1 p-5">
                    <p className="font-bold text-xl mt-2">Your privacy</p>
                    <p className="mt-4">We aim to keep the data you share during this process private, safe, and secure. Learn more in our</p>
                    <a href="https://www.airbnb.com/help/article/2855" className="font-bold underline mt-2">Privacy Policy.</a>
                    <a href="https://www.airbnb.com/help/article/1237" className="font-bold underline mt-2">How identity verification works</a>
                </div>
            </div>
        </div>
     );
}

export default VerifiedMain;