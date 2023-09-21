import { FaCamera, FaHandSparkles, FaPlaceOfWorship, FaSpeakap, FaWodu } from "react-icons/fa";
import { Fa6, FaQuestion, FaSchool, FaMusic } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai"
import { RiSpeakLine } from "react-icons/ri"
import { BiSolidBookAlt,BiLaugh } from "react-icons/bi"
function CreateMain() {
    return ( 
        <div className="w-11/12 h-[80vh] m-auto flex gap-3">
            <div className="w-5/12 h-[70vh]">
            <div className="ml-24">
                <div className="w-48 mt-10 ml-5 h-48 rounded-full bg-stone-800 flex justify-center items-center ">
                    <p className="text-white font-bold text-[7em]">C</p>
                </div>
                <div className="w-24 h-10 rounded-full bg-white z-20 flex gap-3 font-semibold shadow-xl justify-center items-center cursor-pointer relative top-[-1em] left-16">
                <input type="file" accept="image/png,image/jpeg" hidden/>
                    <FaCamera />
                    <p>Add</p>
                    
                </div>
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
                            <input type="text" placeholder="Where did you go to school ?" className="w-10/12 ml-10 outline-none rounded-lg h-16 bg-stone-50"/>
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-20">
                            <FaQuestion className="text-stone-500 relative left-5 text-center text-xl"/>
                            <input type="text" placeholder="Where you live ?" className="w-10/12 ml-10 outline-none rounded-lg h-16 bg-stone-50"/>
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-20">
                            <AiOutlineHeart className="text-stone-500 relative left-5 text-center text-2xl"/>
                            <input type="text" placeholder="What are you obsessed with ?" className="w-10/12 ml-10 outline-none rounded-lg h-16 bg-stone-50"/>
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-20">
                            <FaHandSparkles className="text-stone-500 relative left-5 text-center text-xl"/>
                            <input type="text" placeholder="What’s your most useless skill ?" className="w-10/12 ml-10 outline-none rounded-lg h-16 bg-stone-50"/>
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-col gap-4">
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-20">
                            <RiSpeakLine className="text-stone-500 relative left-5 text-center text-2xl"/>
                            <input type="text" placeholder="Languages you speak ?" className="w-10/12 ml-10 outline-none rounded-lg h-16 bg-stone-50"/>
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-20">
                            <FaMusic className="text-stone-500 relative left-5 text-center text-xl"/>
                            <input type="text" placeholder="What was your favorite song ?" className="w-10/12 ml-10 outline-none rounded-lg h-16 bg-stone-50"/>
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-20">
                            <BiSolidBookAlt className="text-stone-500 relative left-5 text-center text-xl"/>
                            <input type="text" placeholder="What would your biography title be ?" className="w-10/12 ml-10 outline-none rounded-lg h-16 bg-stone-50"/>
                        </div>
                        <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-20">
                            <BiLaugh className="text-stone-500 relative left-5 text-center text-xl"/>
                            <input type="text" placeholder="What’s a fun fact about you ?" className="w-10/12 ml-10 outline-none rounded-lg h-16 bg-stone-50"/>
                        </div>
                    </div>
                </div>
                <button className="w-24 h-12 bg-black text-white rounded-lg font-semibold float-right mt-4">Done</button>
            </div>
        </div>
     );
}

export default CreateMain;