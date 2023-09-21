function ProfileFooter() {
    return ( 
        <div className="w-full h-[20em] bg-stone-50 mt-24 border-[1px] flex gap-20">
            <div className="w-3/12 h-full bg-yellow-100 flex flex-col pl-24 pt-10 gap-3">
                <a href=""> Support</a>
                <a href="">Help Center</a>
                <a href="">Get help with a safety issue</a>
                <a href="">AirCover</a>
                <a href="">Anti-discrimination</a>
            </div>
            <div className="w-3/12 bg-yellow-100 flex flex-col pl-10 pt-10 gap-3">
                <a href="">Hosting</a>
                <a href="">Airbnb your home</a>
                <a href="">AirCover for Hosts</a>
                <a href="">Hosting resources</a>
                <a href="">Community forum</a>
            </div>
            <div className="w-3/12 h-ful bg-stone-100 flex flex-col pl-10 pt-10 gap-3">
                <a href="">Airbnb</a>
                <a href="">Newsroom</a>
                <a href="">New features</a>
                <a href="">Careers</a>
                <a href="">Investors</a>
            </div>
        </div>
     );
}

export default ProfileFooter;