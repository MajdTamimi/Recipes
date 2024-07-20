import { api } from "./api"

export const getRecipes = async () => {
  try {
    const res = await api.get("/recipes")
    return res.data
  } catch (error) {
    console.error("Error Fetching Recipes")
    throw (error)
  }
}