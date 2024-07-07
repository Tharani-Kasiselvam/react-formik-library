import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./component/Dashboard"
import AdminPage from "./component/AdminPage"

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Dashboard />,
        // children : [
        //   {
        //     path : "/",
        //     element : <AdminPage />
        //   }
        // ]
    }
])

const App = () => {
 
    return <RouterProvider router = {router} />
  }


export default App