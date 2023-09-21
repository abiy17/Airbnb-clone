import { useEffect, useState } from 'preact/hooks'
import './app.css'
import LP from './pages/LP'
import MyContext from './context'
import axios from "axios"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import ProfilePage from './pages/ProfilePage'
import Swal from "sweetalert2"
import CreateProfile from './pages/CreateProfile'
export function App() {
  const [ user,setuser ] = useState({
    user: null
  })
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
        filterTax,setfilterTax ,Logout,Profilemodal,setProfilemodal,
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
          </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}
