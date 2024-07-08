import { useNavigate } from 'react-router-dom'



const NotFound = () => {
    const navigate = useNavigate()
    const handlHome = () => {
        navigate("/")
    }
  return (
    <section className="bg-white dark:bg-gray-900 ptop">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <button onClick={handlHome} className=" text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Back to Homepage</button>
            <img src="https://www.nextag.ch/blog/wp-content/uploads/2022/08/nextag-blog-404-fehlerseite-952x524.jpg" alt="" />
        </div>   
    </div>
</section>
  )
}

export default NotFound