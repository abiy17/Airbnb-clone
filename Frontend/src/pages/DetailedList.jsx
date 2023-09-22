import DetailedPage from "../components/DetailedPage";
import Nav from "../components/Nav";
import ProfileFooter from "../components/ProfileFooter";

function DetailedList() {
    return (
        <div className="DetailedList">
            <Nav />
            <DetailedPage />
            <ProfileFooter />
        </div>
      );
}

export default DetailedList;