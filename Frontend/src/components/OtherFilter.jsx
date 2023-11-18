import { Switch } from "antd"
import { useContext } from "preact/hooks";
import MyContext from "../context";
function OtherFilter() {
    const { filterTax,setfilterTax  } = useContext(MyContext)
    return (
        <div className="w-6/12 flex h-16 border-[1px] rounded-2xl m-auto sticky top-[8em] z-10 bg-white">
                <div className="w-[45%] pl-9 flex gap-5 items-center">
                    <p className="font-bold text-center ">Display total price</p>
                    <div className="w-[1px]  bg-stone-300 h-7"></div>
                </div>
                <div className="w-[80%] pl-4 flex gap-[10em] items-center">
                    <p className="font-sans text-stone-500 text-center ">Includes all fees, before taxes</p>
                </div>
                <div className="w-[20%]">
                    <Switch onClick={()=>{setfilterTax(!filterTax)}} className="bg-stone-400  mt-4"/>
                </div>
            </div>
      );
}

export default OtherFilter;