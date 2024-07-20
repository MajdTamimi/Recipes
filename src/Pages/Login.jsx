import background from "../assets/images/Com.png"
import { Link } from "react-router-dom"
import { BiUser } from "react-icons/bi"
import { AiOutlineUnlock } from "react-icons/ai"
import { FaArrowLeft } from 'react-icons/fa'
import { useFetchUser } from "../hooks/useFetchUser.hook.js"
import { useState } from "react"

const Login = ({ setUserIn }) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { fetchUser, error } = useFetchUser({ userName, password, setUserIn })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchUser()
  }

  if (error) {
    return (
      <>
        <div className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-950 bg-white divide-x-2 rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 absolute top-40 left-[600px] border-2 border-gray-200" role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
          </div>
          <div className="ps-4 text-lg font-bold">Something Wrong.</div>
        </div>
        <a href="/" className="absolute top-60 left-[610px] text-gray-800 hover:text-gray-950 font-medium text-xs me-2 mb-2 flex items-center">
          <FaArrowLeft className="mr-2" />
          Back to Homepage
        </a>
      </>
    )
  }

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="bg-[#f3cab02a] border-2 border-[#efd7c82a] rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="relative my-4">
              <input type="text" placeholder="" value={userName} onChange={(e) => setUserName(e.target.value)} required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E45900] focus:outline-none focus:ring-0 focus:text-white focus:border-[#E45900] peer" />
              <label className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E45900] peer-focus:dark:text-[#E45900] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">User Name</label>
              <BiUser className="absolute top-4 right-4" />
            </div>
            <div className="relative my-4">
              <input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E45900] focus:outline-none focus:ring-0 focus:text-white focus:border-[#E45900] peer" />
              <label className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E45900] peer-focus:dark:text-[#E45900] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Password</label>
              <AiOutlineUnlock className="absolute top-4 right-4" />
            </div>
            <div className="flex  gap-6 items-center">
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <label htmlFor="Remember Me">Remember Me</label>
              </div>
              <Link to="#" className="text-[#ff6302]">Forgot Password?</Link>
            </div>
            <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white font-bold text-xl text-[#E45900] hover:bg-[#E45900] hover:text-white py-2 transition-colors duration-300">Login</button>
            <div>
              <span className="mt-4">New Here?<Link className="text-[#E45900] ml-2" to="/register">Create an Account</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login