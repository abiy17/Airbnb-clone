import { Switch } from "antd"
import { useContext } from "preact/hooks";
import MyContext from "../context";
function OtherFilter() {
    const { filterTax,setfilterTax  } = useContext(MyContext)
    return (
        <div className="w-9/12 sm:w-6/12 flex h-16 border-[1px] rounded-2xl m-auto sm:sticky sm:top-[8em] sm:left-0 relative top-[-0.5em] left-[-1em]  z-10 bg-white">
                <div className="w-[79%] sm:w-[45%] sm:pl-9 flex gap-5 items-center">
                    <p className="font-bold text-center text-sm w-full">Display total price</p>
                    <div className="w-[1px] sm:block hidden bg-stone-300 h-7"></div>
                </div>
                <div className="w-[90%] text-sm sm:pl-4 sm:flex hidden gap-[10em] items-center">
                    <p className="font-sans text-stone-500 text-center ">Includes all fees, after taxes</p>
                </div>
                <div className="w-[20%]">
                    <Switch onClick={()=>{setfilterTax(!filterTax)}} className="bg-stone-400  mt-4"/>
                </div>
            </div>
      );
}

export default OtherFilter;