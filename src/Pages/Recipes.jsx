import { useState, useEffect } from 'react'
import Card from '../components/Card';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const BASE_URL = 'https://dummyjson.com'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE_URL}/recipes`,
      {
        method: "GET"
      })
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <span className="loader"></span>
  }

  return (
      <div className='flex justify-center gap-10 flex-wrap ptop'>
        {
          recipes.map((recipe) => {
            return (
              <Card key={recipe.id} recipe={recipe} />
            )
          })
        }
      </div>
  )
}

export default Recipes