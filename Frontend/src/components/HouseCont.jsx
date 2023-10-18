import { useContext, useEffect} from "preact/hooks";
import { AiOutlineHeart } from "react-icons/ai"
import { FaStar } from "react-icons/fa"
import MyContext from "../context";
import { NavLink } from "react-router-dom";
import swal from "sweetalert"
function HouseCont(props) {
    const { user,selectedList,setselectedList,listing,setloginModal,modal,setmodal,filterTax,setfilterTax } = useContext(MyContext)
    const HandleClick =()=>{
        if(user.user === null){
            setloginModal(true)
            setmodal(true)
        }
        else{
            
        }
        
    }   
    const HandleFilter=(Id)=>{
        let filteredArray = listing.filter( item => item.host.host_id === Id )
        console.log(filteredArray[0].name,user.user.data.user._id)
        setselectedList(filteredArray)
      }
    let fee = props.price.$numberDecimal * 0.65
    return ( 
        <div onClick={()=>HandleFilter(props.host.host_id)} className="mt-2 cursor-pointer">
            <NavLink to="DetailedList">
                <div  className="w-[99%] h-[24.4em] bg-white">
                    <div className="w-full rounded-xl h-[75%]">
                        <img src={props.images.picture_url} alt="" className="w-full rounded-xl h-[95%]"/>
                        <AiOutlineHeart onClick={()=>HandleClick()} className="relative left-[11.2em] text-white cursor-pointer hover:text-red-600 duration-300 text-2xl top-[-10.6em]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-10 float-right">
                            <p className="font-bold font-sans w-9/12 overflow-hidden h-5">{props.address.street}</p>
                            <p className="flex text-[.8em]"><FaStar />{props.review_scores === undefined ? "No reviews" : props.review_scores.review_scores_rating/10}</p>
                        </div>
                        <p className="text-stone-500">Hosted By {props.host.host_name}</p>
                        <p className="text-stone-500">Duration: {props.minimum_nights} nights</p>
                        <p className=" font-semibold">${filterTax ? props.price.$numberDecimal + " total before taxes" : fee.toFixed(2) + " nights"}</p>
                    </div>
                </div>
            </NavLink>
        </div>
     );
}

export default HouseCont;