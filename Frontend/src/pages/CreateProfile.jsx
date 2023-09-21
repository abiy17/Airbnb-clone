import CreateMain from "../components/CreateMain";
import OtherNav from "../components/OtherNav";
import ProfileFooter from "../components/ProfileFooter";
function CreateProfile() {
    return (
        <div className="createProfile">
            <OtherNav />
            <CreateMain />
            <ProfileFooter />
        </div>
      );
}

export default CreateProfile;