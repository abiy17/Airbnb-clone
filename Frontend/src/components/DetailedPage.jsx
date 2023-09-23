import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import { FaHome, FaStar } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import Correct from "../assets/correct.svg"
function DetailedPage() {
    const { selectedList,setselectedList } = useContext(MyContext)
    window.scrollTo(0,0)
    const [clip,setclip] = useState(false)
    return (
        <div className="w-10/12 mt-5 h-[200vh] m-auto">
            <div className="">
                <div className="w-full h-12 flex">
                    <div className="w-8/12">
                        <p className="font-bold text-2xl flex gap-3 mt-2"><FaHome />{ selectedList.length === 0 ? "No data" : selectedList[0].name }</p>
                    </div>
                    <div className="w-4/12 float-right flex gap-5 justify-end pt-3">
                        <p className="flex gap-3 underline cursor-pointer"><FaShare className="text-lg"/> Share</p>
                        <p className="flex gap-3 underline cursor-pointer"><AiOutlineHeart className="text-lg"/> Save</p>
                    </div>
                </div>
                <div className="w-full h-[22em] mt-4 rounded-xl flex gap-10" >
                    <img src={ selectedList.length === 0 ? "No data" : selectedList[0].images.picture_url} alt="" className="h-[100%] rounded-xl"/>
                    <p className="text-lg">{ selectedList.length === 0 ? "No data" : selectedList[0].description}</p>
                </div>  
                <div className="w-full h-[80vh] mt-14 flex">
                    <div className="w-7/12 h-full">
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-2xl flex gap-3 mt-2">Address: {selectedList.length === 0 ? "No data" : selectedList[0].address.street}</p>
                            <div className="flex gap-2">
                                <p>{selectedList.length === 0 ? "No data" : selectedList[0].guests_included.$numberDecimal} Guests.</p>
                                <p>{selectedList.length === 0 ? "No data" : selectedList[0].bedrooms} Bedrooms .</p>
                                <p className="underline">{ selectedList.length === 0 ? "No data" : selectedList[0].reviews.length === 0 ? "No Reviews" : selectedList[0].reviews.length} Reviews</p>
                            </div>
                            <p className="font-bold flex gap-2 underline"><FaStar />{ selectedList.length === 0 ? "No Data" : selectedList[0].review_scores === undefined ? "No rating" : selectedList[0].review_scores.review_scores_rating/10 } Ratings</p>
                        </div>
                        <div className="flex flex-col">
                        <div className="w-full h-[90%] mt-10 border-[1px] pt-10 flex gap-8 pl-10 rounded-lg">
                            <img src={selectedList.length === 0 ? "" : selectedList[0].host.host_thumbnail_url} alt="" className="w-12 h-12 rounded-full mt-10"/>
                            <div className={clip ? "flex flex-col h-[20em] overflow-clip gap-2 h-4/12 w-11/12" : "flex flex-col h-[10em] overflow-clip gap-2 h-4/12 w-11/12"}>
                                <p className="text-stone-400">-----------------------------------------------------------------------------------</p>
                                <p className="font-bold font-sans">Hosted By { selectedList.length === 0 ? "" :selectedList[0].host.host_name } </p>
                                <p>I will response { selectedList.length === 0 ? "" : selectedList[0].host.host_response_time}</p>
                                <p className="w-full text-stone-700 font-sans"> { selectedList.length === 0 ? "" : selectedList[0].host.host_about === "" ? "The user have no Information" : selectedList[0].host.host_about}</p>
                                <p className="text-stone-400">-----------------------------------------------------------------------------------</p>
                            </div><p className="cursor-pointer" onClick={()=>{setclip(true)}}>Show More...</p>
                        </div>
                        <div className="mt-10">
                                <p className="font-bold text-2xl font-sans">What This place Offers</p>
                                <div className="grid grid-cols-2 gap-4 pl-10 pt-10">
                                    { selectedList.length === 0 ? "No data" : selectedList[0].amenities.length === 0 ? "There is No data here" : selectedList[0].amenities.map(item =>{
                                        return <p className="flex gap-2 items-center"> <img src={Correct} alt="" className="w-5"/> {item}</p>
                                    })}
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-5/12">
                        <div className="w-10/12 ml-10 mt-20 shadow-xl sticky top-[6em] border-[1px]  h-[28em] rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default DetailedPage;