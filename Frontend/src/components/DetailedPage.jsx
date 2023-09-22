import { useContext } from "preact/hooks";
import MyContext from "../context";
import { FaHome } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
function DetailedPage() {
    const { selectedList,setselectedList } = useContext(MyContext)
    window.scrollTo(0,0)
    return (
        <div className="w-10/12 mt-5  m-auto">
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
                            </div>
                            <p className="font-bold underline">{ selectedList.length === 0 ? "No Data" : selectedList[0].review_scores === undefined ? "No rating" : selectedList[0].review_scores.review_scores_rating/10 } Reviews</p>
                        </div>
                        <div className="w-full"></div>
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