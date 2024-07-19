import Card from "../components/Card"
import { useFetchRecipes } from "../hooks/useFetchRecipes.hook"

const Recipes = () => {
  const { recipes, loading, error } = useFetchRecipes()

  if (loading) {
    return <span className="loader"></span>
  }

  if (error) {
    return <span className="absolute top-1/2">Error Fetching Recipes</span>
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