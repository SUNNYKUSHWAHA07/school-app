import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const homePage = () =>{
    navigate("/")
  } 

  return (
    <nav className="px-4 w-full mb-10 md:px-48 h-36 flex flex-col justify-between bg-[#5C4EA9] pt-5 pb-2 text-white">
    <div className="flex justify-between items-center w-full">
        <h3 className="ml-5">mail@uniformapp.in</h3>
        <div  className="flex items-center text-2xl gap-2">
        <FaFacebookSquare/>
        <CiInstagram/>
        <FaLinkedin/>
        <FaSquareYoutube/>
        </div>
    </div>
    <div className="flex flex-wrap justify-between">
    <img onClick={homePage} className="h-18" src="https://uniformapp.in/images/small_logo.png" alt="" />
    <div id="links" className="hidden md:flex flex-wrap gap-5 items-center font-medium">
        <a href="">Common Admissions</a>
        <a href="">School Portal</a>
        <a href="/school">Find Schools</a>
        <a href="">Blog</a>
        <a href="">Login</a>
        <button className="h-10 px-3 bg-[#5CB85C]">Sign Up</button>
        <IoMdSearch className="text-2xl" />
    </div>
    </div>
</nav>
  )
}

export default Navbar