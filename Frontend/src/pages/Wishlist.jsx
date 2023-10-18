import OtherNav from "../components/OtherNav";
import ProfileFooter from "../components/ProfileFooter";
import WishListMain from "../components/WishListMain";

function WishList() {
    return (
        <div className="wishlists">
            <OtherNav />
            <WishListMain />
            <ProfileFooter />
        </div>
      );
}

export default WishList;