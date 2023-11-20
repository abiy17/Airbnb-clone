import { MdOutlineBedroomParent } from "react-icons/md";
import { FaCity, FaSnowflake } from "react-icons/fa6"
import {  AiOutlineFire, AiOutlineFundView } from "react-icons/ai"
import { FaKey, FaStickyNote } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs"
function FilterCont() {
    return (
        <div className="flex w-full sm:w-11/12 gap-4 sticky top-14 z-10 bg-white">
            <div className="w-7/12 sm:w-8/12 overflow-x-auto sm:m-auto h-20  font-sans flex gap-10 sm:gap-24">
            <div className="flex cursor-pointer  hover:text-red-500 duration-300 flex-col justify-center items-center ml-12  sm:">
                <FaKey className="text-2xl"/>
                <p className="text-stone-500 font-mono hover:text-red-500 text-sm">New</p>
            </div>
            <div className="flex cursor-pointer hover:text-red-500 duration-300 flex-col justify-center items-center ">
                <MdOutlineBedroomParent className="text-xl"/>
                <p className="text-sm">Rooms</p>
            </div>
            <div className="flex cursor-pointer hover:text-red-500 duration-300 flex-col justify-center items-center">
                <FaCity className="text-xl"/>
                <p className="text-sm">City</p>
            </div>
            <div className="flex cursor-pointer hover:text-red-500 duration-300 flex-col justify-center items-center">
                <AiOutlineFire className="text-xl"/>
                <p className="text-sm">Trending</p>
            </div>
            <div className="flex flex-col cursor-pointer hover:text-red-500 duration-300 justify-center items-center ">
                <AiOutlineFundView className="text-xl"/>
                <p className="text-sm">Views</p>
            </div>
            <div className="flex flex-col cursor-pointer hover:text-red-500 duration-300 justify-center items-center ">
                <FaSnowflake className="text-xl"/>
                <p className="text-sm">Arctic</p>
            </div>
            </div>
            <div className="flex cursor-pointer hover:text-red-500 duration-300 gap-5 border-[1px] rounded-2xl h-[40%] mt-4 w-[19%] sm:w-[12%]  p-2 justify-center items-center ">
                <BsFilterRight className="text-xl"/>
                <p className="font-semibold font-mono">Filter</p>
            </div>
        </div>
      );
}

export default FilterCont;