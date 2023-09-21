import FilterCont from "../components/FilterCont";
import Main from "../components/Main";
import Nav from "../components/Nav";
import OtherFilter from "../components/OtherFilter";
import ProfileFooter from "../components/ProfileFooter";
import Signup from "../components/Sigup";

function LP() {
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