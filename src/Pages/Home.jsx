import { useNavigate } from "react-router-dom";
import background from "../assets/images/Com.png"
import { FaArrowRight } from "react-icons/fa6";
const Home = () => {
    const navigate = useNavigate()
    const handlRec = () => {
        navigate("/recipes")
    }
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white mt-10">
      <h1 className="text-6xl font-bold mb-9 mx-40">Unlock the Secrets of Delicious <span className="font-extrabold text-[#E45900]">Recipes</span> </h1>
      <p className="text-2xl mb-8 mx-60">
        Dive into a world of culinary delights and explore a variety of recipes that cater to all tastes and skill levels.
        Whether you're a beginner or a seasoned chef, our collection offers something for everyone. Get inspired, try new
        dishes, and make every meal a memorable experience. Your next favorite recipe is just a click away!
      </p>
      <button onClick={handlRec} className= " px-6 py-3 text-white font-semibold transition duration-300 bg-[rgb(228,89,0)] text-lg text-base  rounded-xl inline-flex items-center focus:outline-none hover:bg-[#C24000] ">
                    <span className="mr-2">Discover recipes</span>
                    <FaArrowRight />
                </button>
    </div>
  </div>
  )
}

export default Home