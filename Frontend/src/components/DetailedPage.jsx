import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import { FaHome, FaStar, FaUser } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import Correct from "../assets/correct.svg"
import { useNavigate } from "react-router-dom";
function DetailedPage() {
    const { selectedList,setselectedList,user } = useContext(MyContext)
    const [clip,setclip] = useState(false)
    const Navigate = useNavigate()
    window.scrollTo(0,0)
    const HandleClick=()=>{
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "name": `${selectedList[0].name}`,
            "picture_url": `${selectedList[0].images.picture_url}`,
            "property_type": `${selectedList[0].property_type}`,
            "room_type": `${selectedList[0].room_type}`
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch(`http://localhost:5000/AddWishlists/${user.user.data.user._id}`, requestOptions)
            .then(response => {
                response.json()
                if( response.status === 200 ){
                    swal("Sucessfully added to Wishlists","Refresh the Page to see changes",'success')
                    Navigate(-1)
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                }
                else if( response.status === 400 ){
                    swal("already added to wishlist","try other items","error")
                } 
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <div className="w-10/12 mt-5 m-auto">
            <div className="flex flex-col">
                <div className="w-full h-12 flex">
                    <div className="w-8/12">
                        <p className="font-bold text-2xl flex gap-3 mt-2"><FaHome />{ selectedList.length === 0 ? "No data" : selectedList[0].name }</p>
                    </div>
                    <div className="w-4/12 float-right flex gap-5 justify-end pt-3">
                        <p className="flex gap-3 underline cursor-pointer"><FaShare className="text-lg"/> Share</p>
                        <p onClick={()=>HandleClick()} className="flex gap-3 underline cursor-pointer"><AiOutlineHeart className="text-lg"/> Save</p>
                    </div>
                </div>
                <div className="w-full h-[22em] mt-4 rounded-xl flex gap-10" >
                    <img src={ selectedList.length === 0 ? "No data" : selectedList[0].images.picture_url} alt="" className="h-[100%] rounded-xl"/>
                    <p className="text-lg">{ selectedList.length === 0 ? "No data" : selectedList[0].description}</p>
                </div>  
                <div className="w-full min-h-[100vh] mt-24 flex">
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
                            <img src={selectedList.length === 0 ? "" : selectedList[0].host.host_thumbnail_url} alt="" className="w-12 h-12 rounded-full"/>
                            <div className={clip ? "flex flex-col h-[20em] overflow-clip gap-2 h-4/12 w-11/12" : "flex flex-col h-[10em] overflow-clip gap-2 h-4/12 w-11/12"}>
                                
                                <p className="font-bold font-sans">Hosted By { selectedList.length === 0 ? "" :selectedList[0].host.host_name } </p>
                                <p className="font-sans font-semibold">I will response { selectedList.length === 0 ? "" : selectedList[0].host.host_response_time}</p>
                                <p className="w-full font-sans text-sm"> { selectedList.length === 0 ? "" : selectedList[0].host.host_about === "" ? "The user have no Information" : selectedList[0].host.host_about}</p>
                            </div><p className={ clip ? "hidden"  : "cursor-pointer"} onClick={()=>{setclip(true)}}>Show More...</p>
                        </div>
                        <div className="mt-24">
                                <p className="font-bold text-2xl font-sans">What This place Offers</p>
                                <div className="grid grid-cols-2 gap-4 pl-5 pt-10">
                                    { selectedList.length === 0 ? "No data" : selectedList[0].amenities.length === 0 ? "There is No data here" : selectedList[0].amenities.map(item =>{
                                        return <p className="flex gap-2 items-center"> <img src={Correct} alt="" className="w-5"/> {item}</p>
                                    })}
                                </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="w-5/12">
                        <div className="w-10/12 ml-10 mt-20 shadow-xl sticky top-[10em] border-[1px]  h-[28em] rounded-xl"></div>
                    </div>
                </div>

            </div>
            <div className="w-full min-h-[30em] mt-24">
                 <p className="font-bold text-2xl">{ selectedList.length === 0 ? "No data" : selectedList[0].reviews.length === 0 ? "No Reviews" : selectedList[0].reviews.length } Reveiws</p>
                <div className="w-full h-full overflow-clip grid grid-cols-2">
                     { selectedList.length === 0 ? "No data" : selectedList[0].reviews.length === 0 ? "No Reviews" : selectedList[0].reviews.map(item =>{
                        return <div className="w-11/12 h-56 shadow-lg rounded-lg overflow-clip">
                                 <div className="flex gap-2 mt-10 ml-4 relative left-3 font-bold">
                                        <FaUser />
                                        <p>{ item.reviewer_name }</p>
                                </div>
                                <p>{ item.date.$date }</p>
                                <p className="w-11/12 text-sm ml-10 mt-5 font-sans">{ item.comments }</p>
                                </div>
                        }) }
                                </div>
                        </div>
        </div>
      );
}

export default DetailedPage;