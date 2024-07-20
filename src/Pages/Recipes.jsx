import Card from "../components/Card"
import { useFetchRecipes } from "../hooks/useFetchRecipes.hook"

const Recipes = () => {
  const { recipes, loading, error } = useFetchRecipes()

  if (loading) {
    return <span className="loader"></span>
  }

  if (error) {
    return (
      <div  className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-950 bg-white divide-x-2 rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 absolute top-40 left-[600px] border-2 border-gray-200" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        </div>
        <div className="ps-4 text-lg font-bold">Failed Fetching Recipes.</div>
      </div>
    )
  }

  return (
    <div className="flex justify-center gap-10 flex-wrap ptop">
      {recipes.map((recipe) => {
        return (
          <Card key={recipe.id} recipe={recipe} />
        )
      })}
    </div>
  )
}

export default Recipes