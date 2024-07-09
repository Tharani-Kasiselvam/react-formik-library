import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./component/Dashboard"
import AdminPage from "./component/AdminPage"

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