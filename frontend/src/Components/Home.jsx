import Navbar from "./Navbar"
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import axios from "axios";

const Home = () => {
    const navigate = useNavigate()
    const {register,handleSubmit,reset,formState:{errors},} = useForm();


    const onSubmit = async (data) => {
     const formData = new FormData();
     formData.append("email", data.email);
     formData.append("image", data.image[0]);
     formData.append("city", data.city);
     formData.append("address", data.address);
     formData.append("name", data.name);
      reset()
      navigate("/school")
     try{
         const response = await axios.post("http://localhost:5000/upload", formData,{
            headers:{
                "Content-Type": "multipart/form-data"
            },
         });
         if(response.status === 200) reset();
         
        
     }catch(err){
        console.log("error in uploading data", err);
     }
     
     
     
    }

  return (

    <div className="h-screen w-full flex flex-col items-center justify-center">
       <Navbar/>
        <form  onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl bg-zinc-200/50 rounded px-5 py-10 flex flex-col items-center justify-center gap-10">
            <div className="w-full flex flex-col">
                <label className="font-bold">Enter Your Email</label>
                <input   className="px-5 border py-3 rounded border-zinc-400 w-full" type="email" {...register("email",{
                    required: "Email required",
                    pattern:{
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "this is not a valid email address"
                    }
                })} placeholder="Enter your email" />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="flex flex-col w-full">
                    <label className="font-bold">Upload Image</label>
                    <input className="rounded px-1 py-2 w-full" type="file" {...register('image',{required: "image is required"})} />
            </div>
            <div className="flex flex-col w-full">
                    <label className="font-bold"> Enter City</label>
                    <input className="rounded px-1 py-2 w-full" type="text" {...register('city',{required: "city is required"})} />
            </div>
            <div className="flex flex-col w-full">
                    <label className="font-bold">Enter name </label>
                    <input className="rounded px-1 py-2 w-full" type="text" {...register('name',{required: "name is required"})} />
            </div>
            <div className="flex flex-col w-full">
                    <label className="font-bold">Enter address </label>
                    <input className="rounded px-1 py-2 w-full" type="text" {...register('address',{required: "address is required"})} />
            </div>
            <button className="bg-[#5CB85C] text-white px-4 py-2 font-bold rounded w-full" type="submit" >Upload</button>
        </form>
    </div>
  )
}

export default Home