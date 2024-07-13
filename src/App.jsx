import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./component/Dashboard"

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Dashboard />
      }
])

const App = () => {
 
    return <RouterProvider router = {router} />
  }


export default App