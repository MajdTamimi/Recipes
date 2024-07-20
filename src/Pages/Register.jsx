import background from "../assets/images/Com.png"
import { AiOutlineUnlock } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { MdOutlineEmail } from "react-icons/md"
import { Link } from "react-router-dom"

const Register = () => {

  return (
    <div className="relative w-full h-screen bg-cover bg-center flex justify-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="bg-[#f3cab02a] border-2 border-[#efd7c82a] rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
          <form>
            <div className="relative my-4">
              <input type="email" placeholder="" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E45900] focus:outline-none focus:ring-0 focus:text-white focus:border-[#E45900] peer" />
              <label className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E45900] peer-focus:dark:text-[#E45900] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Email</label>
              <MdOutlineEmail className="absolute top-4 right-4" />
            </div>
            <div className="relative my-4">
              <input type="text" placeholder="" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E45900] focus:outline-none focus:ring-0 focus:text-white focus:border-[#E45900] peer" />
              <label className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E45900] peer-focus:dark:text-[#E45900] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">User Name</label>
              <BiUser className="absolute top-4 right-4" />
            </div>
            <div className="relative my-4">
              <input type="password" placeholder="" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E45900] focus:outline-none focus:ring-0 focus:text-white focus:border-[#E45900] peer" />
              <label className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E45900] peer-focus:dark:text-[#E45900] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Password</label>
              <AiOutlineUnlock className="absolute top-4 right-4" />
            </div>
            <div className="relative my-4">
              <input type="password" placeholder="" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E45900] focus:outline-none focus:ring-0 focus:text-white focus:border-[#E45900] peer" />
              <label className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E45900] peer-focus:dark:text-[#E45900] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Confirm Password</label>
              <AiOutlineUnlock className="absolute top-4 right-4" />
            </div>
            <button type="submit" className="w-full mb-4 text-[18px] mt-3 rounded-full bg-white font-bold text-xl text-[#E45900] hover:bg-[#E45900] hover:text-white py-2 transition-colors duration-300">Register</button>
            <div>
              <span className="mt-4">Already have an account?<Link className="text-[#E45900] ml-2" to="/login">Login</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register