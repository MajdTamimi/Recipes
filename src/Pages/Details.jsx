import { useParams } from "react-router-dom"
import { useFetchDetails } from "../hooks/useFetchDetails.hook"
import { BiErrorAlt } from "react-icons/bi";

const Details = () => {
  const { id } = useParams()
  const { data, error } = useFetchDetails({ id })

  if (error) {
    return (
      <div  className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-950 bg-white divide-x-2 rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 absolute top-40 left-[600px] border-2 border-gray-200" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        </div>
        <div className="ps-4 text-lg font-bold">Failed Fetching Details.</div>
      </div>
    )
  }

  return (
    <section className="bg-white dark:bg-gray-900 antialiased ptop">
      <div className="max-w-screen-xl mx-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-0 xl:gap-0">
          <img className="w-11/12 dark:hidden rounded-xl shadow-zinc-800 shadow-2xl br" src={data.image} alt={data.name} />
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="font-bold text-gray-900 sm:text-5xl dark:text-white">{data.name}</h1>
            <div>
              {data.tags?.map(tag => {
                return <button key={tag} type="button" className="text-black bg-white font-medium rounded-full br text-sm px-2 py-1 text-center my-3 me-1">#{tag}</button>
              })}
            </div>
            <div className="mb-4 mx-1 sm:items-center sm:gap-4 sm:flex">
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">{data.rating}</p>
              </div>
            </div>
            <p> <span className='mx-2 font-bold'>cuisine:</span> {data.cuisine}</p>
            <p> <span className='mx-2 font-bold'>difficulty:</span> {data.difficulty}</p>
            <hr className="my-5 border-gray-200 dark:border-gray-800" />
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className=" items-center ps-5">
                  <p className="w-full pt-2 ms-5 text-sm font-medium text-gray-900 dark:text-gray-300">Prep Time </p>
                  <p className="w-full pb-2 pt-1 ms-8 text-sm font-medium text-gray-600 dark:text-gray-300">{data.prepTimeMinutes} min</p>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className=" items-center ps-3">
                  <p className="w-full pt-2 ms-5 text-sm font-medium text-gray-900 dark:text-gray-300">Cook Time </p>
                  <p className="w-full pb-2 pt-1 ms-8 text-sm font-medium text-gray-600 dark:text-gray-300">{data.cookTimeMinutes} min</p>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="items-center ps-3">
                  <p className="w-full pt-2 ms-8 text-sm font-medium text-gray-900 dark:text-gray-300">Servings </p>
                  <p className="w-full pb-2 pt-1 -ms-3 text-center text-sm font-medium text-gray-600 dark:text-gray-300">{data.servings}</p>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="items-center -ms-5">
                  <p className="w-full pt-2 mx-8 text-sm font-medium text-gray-900 dark:text-gray-300">Calories Per Serving</p>
                  <p className="w-full pb-2 pt-1 text-center text-sm font-medium text-gray-600 dark:text-gray-300">{data.caloriesPerServing} cal</p>
                </div>
              </li>
            </ul>
            <hr className="my-5 border-gray-200 dark:border-gray-800" />
            <div className="min-w-100 flex justify-between gap-40">
              <div className="mx-5">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Ingredients:</h2>
                <ul className="max-w-md space-y-1 text-gray-900 list-disc dark:text-gray-400">
                  {data.ingredients?.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>
                  })}
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Instructions:</h2>
                <ol className="max-w-md space-y-1 text-gray-900 list-decimal dark:text-gray-400">
                  {data.instructions?.map((instruction, index) => {
                    return <li key={index}>{instruction}</li>
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details