import { useEffect, useState } from "react"
import { getDetails } from "../services/getDetails"

export const useFetchDetails = ({ id }) => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getDetails(id)
        setData(data)
      }catch {
        setError(true)
      }
    }

    fetchDetails()
  }, [])

  return { data, error }
}