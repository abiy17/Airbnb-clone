import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa"
function ProfileFooter() {
    return ( 
        <>
            <div className="w-full flex-c0l justify-center items-center sm:h-[18em] bg-stone-50 mt-24 border-[1px] sm:flex gap-20">
            <div className="sm:w-3/12 h-full flex flex-col pl-24 pt-10 gap-5">
                <p> Support</p>
                <a className="hover:underline" href="https://www.airbnb.com/help/">Help Center</a>
                <a className="hover:underline" href="https://www.airbnb.com/guest/inbox/1606717775">Get help with a safety issue</a>
                <a className="hover:underline" href="https://www.airbnb.com/help/article/3218">AirCover</a>
                <a className="hover:underline" href="https://www.airbnb.com/against-discrimination">Anti-discrimination</a>
            </div>
            <div className="sm:w-3/12 h-full flex flex-col sm:pl-10 pl-24 pt-10 gap-5">
                <p>Hosting</p>
                <a className="hover:underline" href="https://www.airbnb.com/host/homes?from_footer=1">Airbnb your home</a>
                <a className="hover:underline" href="https://www.airbnb.com/aircover-for-hosts">AirCover for Hosts</a>
                <a className="hover:underline" href="https://www.airbnb.com/resources/hosting-homes">Hosting resources</a>
                <a className="hover:underline" href="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center">Community forum</a>
            </div>
            <div className="sm:w-3/12 h-full flex flex-col pl-24 pt-10 gap-5">
                <p>Airbnb</p>
                <a className="hover:underline" href="https://news.airbnb.com/">Newsroom</a>
                <a className="hover:underline" href="https://www.airbnb.com/release">New features</a>
                <a className="hover:underline" href="https://careers.airbnb.com/">Careers</a>
                <a className="hover:underline" href="https://investors.airbnb.com/home/default.aspx">Investors</a>
            </div>
        </div>
        <div className="w-full hidden h-10 border-stone-100 border-[1px] bg-stone-100 sm:flex justify-center items-center">
            <div className="flex gap-10 mr-24 justify-center items-center relative left-[-12em]">
                <p className="hover:underline" >© 2023 Airbnb, Inc</p>
                <a className="hover:underline" href="https://www.airbnb.com/help/article/2908">Terms</a>
                <a className="hover:underline" href="https://www.airbnb.com/sitemaps/v2">Sitemap</a>
                <a className="hover:underline" href="https://www.airbnb.com/help/article/2855">Privacy</a>
                <a className="hover:underline" href="https://www.airbnb.com/help/sale-share-opt-out">Your Privacy Choices</a>
            </div>
            <div className="flex gap-4 text-xl">
                <a href="https://www.facebook.com/airbnb"><FaFacebook /></a>
                <a href="https://twitter.com/airbnb"><FaTwitter /></a>
                <a href="https://www.instagram.com/airbnb/"><FaInstagram /></a>
            </div>
        </div>
        </>
     );
}

export default ProfileFooter;