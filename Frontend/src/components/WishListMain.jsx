import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import { useNavigate } from "react-router-dom";

function WishListMain() {
    const { currentUser,setcurrentUser,setselectedList,listing } = useContext(MyContext)
    const Navigate = useNavigate()
    console.log(currentUser)

    const ViewInfo=(Name)=>{
        let filteredList = listing.filter(item => item.name === Name)
        setselectedList(filteredList)
        Navigate(`/DetailedList`)
    }
    return (
        <div className="min-h-[20em] flex flex-col">
            <div className="w-11/12 min-h-[5em] m-auto mt-5">
                <p className="font-bold text-2xl ml-20 mt-3">Wishlists</p>
            </div>
            <div className="min-h-[40em] w-11/12 m-auto shadow-md grid grid-cols-2 gap-x-5 gap-y-1 rounded-3xl pl-10">
                {currentUser === null ? <p>No Info</p> : currentUser.Wishlists.length === 0 ? <div className="w-11/12 h-20 ml-10">
                    <p className="text-xl font-bold">There is No Wishlists here!</p>
                    <button onClick={()=>Navigate(-1)} className="w-11/12 hover:scale-90 duration-300 rounded-xl ml-3 mt-6 h-12 bg-pink-600 text-white font-semibold">Home page</button>
                </div> : currentUser.Wishlists.map(item =>{
                    return <div className="w-[100%] h-40 bg-stone-50 rounded-xl flex">
                        <div className="w-[35%] h-full">
                            <img src={item.picture_url} alt="" className=" rounded-xl h-full"/>
                        </div>
                        <div className="w-[65%] h-full ">
                            <p className="font-bold relative left-4 mt-3">{item.name}</p>
                            <p className="text-stone-500 mt-2 font-mono font-semibold ml-4">type: { item.property_type }</p>
                            <p className="text-stone-500 mt-2 font-mono font-semibold ml-4">Room Type: { item.room_type }</p>
                            <button onClick={()=>ViewInfo(item.name)} className="w-11/12 hover:scale-90 duration-300 rounded-xl ml-3 mt-6 h-12 bg-pink-600 text-white font-semibold">View full info</button>
                        </div>
                    </div>
                }) }
            </div>
        </div>
      );
}

export default WishListMain;