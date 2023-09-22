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
export function App() {
  const [ user,setuser ] = useState({
    user: null
  })
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
  },[])
    console.log(selectedList);
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
  useEffect(()=>{
    console.log(selectedList)
  },[])
  return (
    <>
      <MyContext.Provider value={{ 
        filterTax,setfilterTax ,Logout,Profilemodal,country,setcountry
        ,setProfilemodal,selectedList,setselectedList,
        Loading,setLoading,modal,setmodal,
        loginModal,setloginModal,listing,setlisting,
        signUpModal,setsignUpModal,user,setuser
        ,username,setusername,email,setemail
        ,password,setpassword,phoneNumber
        ,setphoneNumber,countryCode,setcountryCode }}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LP />}/>
            <Route path='/profile' element={<ProfilePage />}/>
            <Route path='/profile/createProfile' element={<CreateProfile />}/>
            <Route path='/DetailedList' element={<DetailedList />}/>
          </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}
