import { useContext } from "preact/hooks";
import HouseCont from "./HouseCont";
import MyContext from "../context";
import Skeleton from "./skeleton";
function Main() {
    const { Loading,setLoading,listing,setlisting } = useContext(MyContext)
    return (
        <div className=" pl-6 mt-7 pr-6 grid grid-cols-4 gap-4">
            {Loading ?  <div className="grid w-[80em] grid-cols-4 gap-3 ml-2">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </div>
                 : listing.map(item =>{
                return <HouseCont 
                    { ...item }
                />
            })}
        </div>
      );
}

export default Main;