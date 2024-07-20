import { useState, useEffect } from "react"
import { getRecipes } from "../services/getRecipes"

export const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes()
        setRecipes(data.recipes)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  return { recipes, loading, error }
}