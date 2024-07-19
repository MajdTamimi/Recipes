import logo from "../assets/images/LOGO.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoSettingsSharp } from "react-icons/io5"
import { PiSignOutBold } from "react-icons/pi"
import { RiProfileFill } from "react-icons/ri"

const Navbar = ({ setUserIn }) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    navigate("/login")
    setUserIn(false)
  }

  return (
    <nav className="bg-[#151C2A] z-20 top-0 start-0 fixed border-gray-200 dark:bg-gray-900 px-5 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-20 py-2">
        <a href="https://flowbite.com/" className="flex items-center w-50 rtl:space-x-reverse">
          <img src={logo} className="max-h-40 w-30 -ml-20 mr-15" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 ml-72">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block w-60 h-9 ml-80">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="h-full block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for recipes..." />
          </div>
          <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for recipes..." />
          </div>
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#151C2A] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/login" className="block py-2 px-3 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E45900] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
            </li>
            <li>
              <a href="/" className="block py-2 px-3 text-lg text-white bg-blue-700 rounded md:bg-transparent md:hover:text-[#E45900] md:text-white md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/recipes" className="block py-2 px-3 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E45900] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Recipes</a>
            </li>
          </ul>
        </div>
        <div className="absolute right-9">
          <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" onClick={toggleDropdown}>
            <span className="sr-only">Open user menu</span>
            <img className="w-10 h-10 rounded-full" src={user.image} alt="user photo" />
          </button>
          <div id="user-dropdown" className={`z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-200 rounded-lg shadow-xl dark:bg-gray-700 dark:divide-gray-600 border absolute right-0.5 mt-2.5`}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{user.firstName} {user.lastName}</div>
              <div className="font-medium truncate">{user.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="user-menu-button">
              <li className="flex items-center">
                <RiProfileFill className="ml-2" />
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
              </li>
              <li className="flex items-center">
                <IoSettingsSharp className="ml-2" />
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
            </ul>
            <div className="py-2 flex items-center">
              <PiSignOutBold className="ml-2" />
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={handleLogout}>Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar