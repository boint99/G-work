import { useRoutes, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import routes from "./routes"
import Loading from "~/components/Loading/Loading"

export default function RoutesView() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    // Giả lập render xong sau 400ms
    // const timeout = setTimeout(() => setLoading(false), 1000)
    // return () => clearTimeout(timeout)
  }, [location])

  if (loading) return <Loading />

  return useRoutes(routes)
}
