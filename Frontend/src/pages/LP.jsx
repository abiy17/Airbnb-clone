import { useContext } from "preact/hooks";
import FilterCont from "../components/FilterCont";
import Main from "../components/Main";
import Nav from "../components/Nav";
import OtherFilter from "../components/OtherFilter";
import ProfileFooter from "../components/ProfileFooter";
import Signup from "../components/Sigup";
import MyContext from "../context";

function LP() {
    const { userId } = useContext(MyContext)
    console.log(userId)
    return ( 
        <div className="">
            <Nav />
            <FilterCont />
            <OtherFilter />
            <Main />
            <ProfileFooter />
        </div>
     );
}

export default LP;