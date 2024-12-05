import { FaStar } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
const card = ({image,index}) => {
  return (
    <div key={index} className="flex flex-col items-start gap-1 rounded-lg border-2 justify-between border-gray-300 w-full md:w-[20vw] h-max md:h-[50vh]">
          
       <div className="relative w-full overflow-hidden h-[70%]  md:h-fit">
       <div className="absolute right-4 flex items-center justify-center text-zinc-500 gap-1">
       Add to compare <FaCirclePlus />
        </div>
      
       <img className="h-full ease-linear duration-300 w-full hover:scale-150  object-cover object-center" src={image.image} alt="" />
      
       </div>
       <div className="flex w-full px-10 items-center justify-between">
      <div className="flex text-yellow-400">
        <FaStar />
       <FaStar />
       <FaStar />
       <FaStar />
       </div>
        <h3 className="text-zinc-500 uppercase">cbse</h3>
       </div>
       <div className="px-10 text-gray-400">{image.city}</div>
       <h1 className="text-xl px-10 font-medium">{image.name}</h1>
       <h3 className="text-lg px-10 text-gray-600" >{image.address}</h3>
       <button className="px-3 py-1 bg-green-600 w-full text-white capitalize hover:bg-blue-300">apply</button>
     </div>
   
  )
}

export default card