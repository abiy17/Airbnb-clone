function HostingMain() {
    return (
        <div className="min-h-[30em] w-11/12 m-auto flex mt-10">
            <div className="w-2/3 min-h-[20em] p-2">
                <p className="font-semibold text-2xl font-sans text-red-500 mb-10"> Hosting Rules</p>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Accurate Listing Information:</li>
                  <p className="ml-4">Provide accurate and truthful information about your property, including its amenities, location, and rules.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Compliance with Local Laws::</li>
                  <p className="ml-4">Ensure that your listing complies with local laws, regulations, and zoning requirements.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Quality and Cleanliness:</li>
                  <p className="ml-4">Maintain a clean and well-maintained space for guests.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Communication:</li>
                  <p className="ml-4">Be responsive to guest inquiries and messages. Prompt and clear communication is essential for a positive guest experience.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">House Rules:</li>
                  <p className="ml-4">Clearly communicate your house rules to guests. This may include rules about smoking, pets, quiet hours, and other important considerations.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Security and Safety:</li>
                  <p className="ml-4">Take steps to ensure the safety and security of your guests. Provide information about emergency procedures and contacts.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Check-in and Check-out Procedures:</li>
                  <p className="ml-4">Clearly communicate check-in and check-out procedures to guests. Be flexible when possible and accommodate guest needs within reason.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Guest Privacy:</li>
                  <p className="ml-4">Respect your guests' privacy and adhere to Airbnb's policies regarding privacy and data protection.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Cancellation Policy</li>
                  <p className="ml-4">Set a clear cancellation policy and communicate it to guests during the booking process.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Payment and Pricing:</li>
                  <p className="ml-4">Adhere to Airbnb's policies regarding pricing, payments, and fees.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Reviews</li>
                  <p className="ml-4">Encourage guests to leave reviews after their stay, and consider leaving reviews for your guests as well. Reviews contribute to the credibility and reputation of both hosts and guests.</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <li className="font-semibold">Anti-Discrimination Policy</li>
                  <p className="ml-4">Airbnb has a strict anti-discrimination policy. Hosts should not discriminate against guests based on factors such as race, religion, nationality, gender, sexual orientation, or disability..</p>
                </div>
            </div>
            <div className="w-4/5 flex flex-col gap-4 h-[30em]">
                <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                    <p className="font-semibold w-2/12">House Name</p>
                    <input type="text" placeholder="write Here..." className="w-8/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>
                </div>
                <div className="w-11/12 flex pl-10 gap-10 items-center bg-stone-50 rounded-lg p-2">
                    <p className="font-semibold w-2/12">Add Image</p>
                    <label className="w-24 h-10 rounded-full bg-black text-white z-20 flex gap-3 font-semibold shadow-xl justify-center items-center cursor-pointer">Add <input hidden type="file" placeholder="Where did you go to school ?" className="w-8/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-0" /></label>
                </div>
                <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                    <p className="font-semibold w-2/12">description</p>
                    <input type="text" placeholder="write Here..." className="w-8/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>
                </div>
                <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                    <p className="font-semibold w-2/12"> street</p>
                    <input type="text" placeholder="write Here..." className="w-8/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>
                </div>
                <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                    <p className="font-semibold w-2/12">Guests</p>
                    <input type="number" placeholder="write Here..." className="w-8/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>
                </div>
                <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                    <p className="font-semibold w-2/12">bedrooms</p>
                    <input type="number" placeholder="write Here..." className="w-8/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>
                </div>
                <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                    <p className="font-semibold w-2/12">Price</p>
                    <input type="number" placeholder="write Here..." className="w-8/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>
                </div>
                <div className="w-11/12 flex justify-center items-center bg-stone-50 rounded-lg h-16">
                    <p className="font-semibold w-2/12">Amenties</p>
                    <input type="text" placeholder="write Here... ?" className="w-8/12 font-sans ml-10 outline-none rounded-lg h-16 bg-stone-50" required/>
                </div>
                <button className="w-5/12 p-3 bg-pink-600 text-white font-semibold rounded-2xl hover:scale-105 active:scale-100 mt-10 m-auto duration-300">Host</button>
            </div>
        </div>
      );
}

export default HostingMain;