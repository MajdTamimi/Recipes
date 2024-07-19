import { toast } from "react-toastify"
import { getUser } from "../services/getUser"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useFetchUser = ({ userName, password, setUserIn }) => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const fetchUser = async () => {
    try {
      const data = await getUser(userName, password)
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data))
      setUserIn(true)
      navigate("/")
      toast.success("Login successful!", {
        theme: "colored"
      })
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Login failed! Check your username or password", {
          theme: "colored"
        })
      } else {
        setError(true)
      }
      setUserIn(false)
    }
  }

  return { fetchUser, setUserIn, error }
}
