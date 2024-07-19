import { api } from "./api"

export const getUser = async (username, password) => {
  try {
    const res = await api.post("/auth/login", { username, password })
    return res.data
  } catch (error) {
    console.error("Error: ", error)
    throw (error)
  }
}