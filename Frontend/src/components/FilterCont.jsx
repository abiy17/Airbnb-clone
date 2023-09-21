import { MdOutlineBedroomParent } from "react-icons/md";
import { FaCity, FaSnowflake } from "react-icons/fa6"
import {  AiOutlineFire, AiOutlineFundView } from "react-icons/ai"
import { FaKey, FaStickyNote } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs"
function FilterCont() {
    return (
        <div className="flex flex-col gap-4 sticky top-14 z-10 bg-white">
            <div className="w-10/12 mt-5 m-auto h-20  font-sans flex">
            <div className="flex cursor-pointer text-stone-400 hover:text-red-500 duration-300 flex-col justify-center items-center  ml-24">
                <FaKey className="text-2xl"/>
                <p className="text-stone-500 font-mono hover:text-red-500 text-sm">New</p>
            </div>
            <div className="flex text-stone-500 cursor-pointer hover:text-red-500 duration-300 flex-col justify-center items-center ml-24">
                <MdOutlineBedroomParent className="text-2xl"/>
                <p className="text-sm">Rooms</p>
            </div>
            <div className="flex text-stone-500 cursor-pointer hover:text-red-500 duration-300 flex-col justify-center items-center  ml-24">
                <FaCity className="text-2xl"/>
                <p className="text-sm">Iconic City</p>
            </div>
            <div className="flex text-stone-500 cursor-pointer hover:text-red-500 duration-300 flex-col justify-center items-center ml-24">
                <AiOutlineFire className="text-2xl"/>
                <p className="text-sm">Trending</p>
            </div>
            <div className="flex flex-col cursor-pointer text-stone-500 hover:text-red-500 duration-300 justify-center items-center ml-24">
                <AiOutlineFundView className="text-2xl"/>
                <p className="text-sm">Amazing Views</p>
            </div>
            <div className="flex flex-col cursor-pointer text-stone-500 hover:text-red-500 duration-300 justify-center items-center ml-24">
                <FaSnowflake className="text-2xl"/>
                <p className="text-sm">Arctic</p>
            </div>
            <div className="flex cursor-pointer text-stone-500 hover:text-red-500 duration-300 gap-5 border-[1px] rounded-2xl h-[40%] mt-4 w-[12%] p-5 justify-center items-center ml-24">
                <BsFilterRight className="text-3xl"/>
                <p className="font-semibold font-mono">Filter</p>
            </div>
            </div>
        </div>
      );
}

export default FilterCont;