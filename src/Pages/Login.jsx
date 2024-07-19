import { Link, useNavigate } from "react-router-dom"
import background from "../assets/images/Com.png"
import { BiUser } from "react-icons/bi"
import { AiOutlineUnlock } from "react-icons/ai"
import { useState } from "react"
import { toast } from "react-toastify"

const Login = ({ setUserIn }) => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function login() {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userName,
        password: password,
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Login failed! Check your username or password")
        }
        return res.json()
      })
      .then(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data))
        setUserIn(true)
        toast.success("Login successful!", {
          theme: "colored"
        })
        navigate("/")
      })
      .catch(err => {
        toast.error(err.message, {
          theme: "colored"
        })
        setUserIn(false)
      })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    login()
  }

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="bg-[#f3cab02a] border-2 border-[#efd7c82a] rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
          <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
          <form action="" onSubmit={handleSubmit} >
            <div className="relative my-4 ">
              <input type="text" placeholder="" value={userName} onChange={(e) => setUserName(e.target.value)} required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E45900] focus:outline-none focus:ring-0 focus:text-white focus:border-[#E45900] peer" />
              <label htmlFor="" className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E45900] peer-focus:dark:text-[#E45900] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">User Name</label>
              <BiUser className="absolute top-4 right-4" />
            </div>
            <div className="relative my-4 ">
              <input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E45900] focus:outline-none focus:ring-0 focus:text-white focus:border-[#E45900] peer" />
              <label htmlFor="" className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E45900] peer-focus:dark:text-[#E45900] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Password</label>
              <AiOutlineUnlock className="absolute top-4 right-4" />
            </div>
            <div className="flex  gap-6 items-center">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me ">Remember Me</label>
              </div>
              <Link to="" className="text-[#ff6302]">Forgot Password?</Link>
            </div>
            <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white font-bold text-xl text-[#E45900] hover:bg-[#E45900] hover:text-white py-2 transition-colors duration-300">Login</button>
            <div>
              <span className="m-4">New Here?<Link className="text-[#ff6302] ml-2" to="/register">Create an Account</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login