import { useEffect, useState } from 'preact/hooks'
import './app.css'
import LP from './pages/LP'
import MyContext from './context'
import axios from "axios"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import ProfilePage from './pages/ProfilePage'
import Swal from "sweetalert2"
import CreateProfile from './pages/CreateProfile'
import DetailedList from './pages/DetailedList'
import WishList from './pages/Wishlist'
import { Result } from 'antd'
export function App() {
  const [ user,setuser ] = useState({
    user: null
  })
  const [ currentUser,setcurrentUser ] = useState({})
  const [ userData,setuserData ] = useState([])
  const [ selectedList,setselectedList ] = useState([])
  const [ filterTax,setfilterTax ] = useState(false)
  const [ modal,setmodal ] = useState(false);
  const [ Loading,setLoading ] = useState(true)
  const [ listing,setlisting ] = useState([])
  const [ loginModal,setloginModal ] = useState(false)
  const [ username,setusername ] = useState("")
  const [ email,setemail ] = useState("")
  const [ password,setpassword ] = useState("")
  const [ countryCode,setcountryCode ] = useState("")
  const [ phoneNumber,setphoneNumber ] = useState("")
  const [ signUpModal,setsignUpModal ] = useState(false)
  const [ Profilemodal,setProfilemodal ] = useState(false)
  const [ country,setcountry ] = useState("")
  let filteredUser
  if(user.user === null){
    filteredUser = null
    setcurrentUser(null)
  }else{
    filteredUser = userData.find(item => item._id === user.user.data.user._id)
    setcurrentUser(filteredUser)
  }
  useEffect(()=>{
    axios.get(`http://localhost:5000/listing`).then(res => {
      setlisting(res.data)
      setLoading(false)
    })
    const UserInfo = JSON.parse(localStorage.getItem(`user`))
    if(UserInfo){
      setuser({
        user: UserInfo
      })
    }
    axios.get(`http://localhost:5000/users`).then(res =>{
      setuserData(res.data.user)
    })
    const selectedItem = JSON.parse(localStorage.getItem(`selectedItem`))
    if(selectedItem){
      setselectedList(selectedItem)
    }
    console.log(selectedItem)
  },[])
  const Logout =()=>{
    localStorage.removeItem(`user`)
    setuser({
        user: null
    })
    Swal.fire({
        title: `logged Out sucessfully`,
        icon: "success",
        button: "Aww yiss!",
      });
}
  return (
    <>
      <MyContext.Provider value={{
        filterTax,setfilterTax ,Logout,Profilemodal,country,setcountry,userData,setuserData,username,setusername,email,setemail,currentUser,setcurrentUser,
        setProfilemodal,selectedList,setselectedList,Loading,setLoading,modal,setmodal,password,setpassword,phoneNumber,
        loginModal,setloginModal,listing,setlisting,signUpModal,setsignUpModal,user,setuser,setphoneNumber,countryCode,setcountryCode
         }}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LP />}/>
            <Route path='/profile' element={<ProfilePage />}/>
            <Route path='/profile/createProfile' element={<CreateProfile />}/>
            <Route path='/DetailedList' element={<DetailedList />}/>
            <Route path='/wishlists' element={<WishList />}/> 
          </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}
