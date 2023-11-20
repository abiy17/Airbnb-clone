import { useContext } from "preact/hooks";
import HouseCont from "./HouseCont";
import MyContext from "../context";
import Skeleton from "./skeleton";
import { FaSadCry } from "react-icons/fa";
function Main() {
    const { Loading,setLoading,listing,setlisting } = useContext(MyContext)
    return (
        <div className=" pl-6 mt-7 pr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Loading ?  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[80em] gap-3 ml-2">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </div>
                 : listing.length === 0 ? 
                 <div className="w-[30em] flex flex-col justify-center m-auto gap-5  h-[19em] ml-36">
                        <p className="flex gap-5 text-4xl"><FaSadCry />Couldn't Find any Data!</p>
                        <p className="font-semibold">Please Try again!</p>
                        <p className="font-semibold text-stone-500">tip:- Start with Capital letter for better Searching,But first make Sure to write it correctly</p>
                 </div> : listing.map(item =>{
                    return <HouseCont 
                        { ...item }
                    />
                })}
        </div>
      );
}

export default Main;