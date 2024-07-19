import { api } from "./api"

export const getDetails = async (id) => {
  try {
    const res = await api.get(`/recipes/${id}`)
    return res.data
  } catch (error) {
    console.error("Error Fetching Details")
    throw (error)
  }
}