import axios from "axios";

import { useEffect, useState } from "react"
import Card from "./Card";
import Navbar from "./Navbar";

const School = () => {
   const [images, setImages]= useState([]);
    
   useEffect(() => {
     const fetchImages = async() =>{
      try{
        const response = await axios.get( {"http://localhost:5000/getschool"});
        setImages(response.data)
        console.log(response.data.image)
      }catch(err){
        console.log("error in fecting data",err);
      }
     };

     fetchImages();
   },[]);
   

  return (
 <>
   <Navbar/>
     <form className="flex flex-col items-center py-10 justify-between gap-2 md:px-10">
      <label className="text-5xl capitalize md:text-4xl underline">search school Name</label>
      <p>Find the right school for your child.</p>
      <input className="outline-none border-2 w-full md:w-[50vw] text-center capitalize rounded-full border-black" placeholder="enter your school name" type="text" />
      <button className="px-2 py-1 bg-green-600 rounded capitalize text-white"  type="submit">search</button>
     </form>
    <div className="flex flex-wrap gap-12 items-center  justify-center min-[100vh] px-4 md:px-28 shadow-lg">
     
      {images.map((image,index)=>(
        <Card key={index} image={image} index={index} />
      ))}
    </div>
 </>
   
  )
}

export default School