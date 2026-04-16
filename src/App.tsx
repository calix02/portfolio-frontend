import { createBrowserRouter, RouterProvider } from "react-router"; 
import { MainPortfolio } from "./pages/MainPortfolio";
 
 
function App() { 
  const router = createBrowserRouter([ 
    { 
      path: "/", 
      Component: MainPortfolio, 
    }, 
  ]); 
 
  return ( 
    <div> 
      <RouterProvider router={router} /> 
    </div> 
  ); 
} 
export default App; 