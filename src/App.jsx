import { useState, useEffect } from 'react'
import Card from './components/Card';

function App() {
  const [recipes, setRecipes] = useState([]);
  const BASE_URL = 'https://dummyjson.com'

  useEffect(() => {
    fetch(`${BASE_URL}/recipes`,
      {
        method: "GET"
      })
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes)
      })
  }, [])

  return (
    <div>
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

export default App;