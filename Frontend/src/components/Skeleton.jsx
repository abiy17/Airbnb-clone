import Skeletonn from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function Skeleton() {
    return (
        <div className="z-0">
            <div className="w-[99%] h-[18.4em] bg-white">
                <Skeletonn className='w-[99%] h-full'/>
            </div>
            <div className="">
                <Skeletonn className='w-[90%] mt-5'/>
                <Skeletonn className='w-[80%] mt-2'/>
                <Skeletonn className='w-[80%] mt-2'/>
            </div>
        </div>
      );
}

export default Skeleton;