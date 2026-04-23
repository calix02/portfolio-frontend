import { createBrowserRouter, RouterProvider } from "react-router"; 
import { MainPortfolio } from "./pages/MainPortfolio";
import { useEffect } from "react"
import { Dashboard } from "./pages/admin-pages/Dashboard";
import { Home } from "./pages/admin-pages/Home";


// ✅ Moved outside the component — created only once
const router = createBrowserRouter([ 
  { 
    path: "/", 
    Component: MainPortfolio, 
  }, 
  {
    path: "/dashboard",
    Component: Dashboard
  },
   {
    path: "/home",
    Component: Home
  },
]); 

function App() { 

  useEffect(() => {
    const el = document.createElement("script")
    el.src = "https://www.tuqlas.com/chatbot.js"
    el.setAttribute("data-key", "tq_live_a5dd44e07066c1c3eff16134839862cc1df92125")
    el.setAttribute("data-api", "https://www.tuqlas.com")
    el.defer = true
    document.body.appendChild(el)
    return () => el.remove()
  }, [])

  return ( 
    <div> 
      <RouterProvider router={router} /> 
    </div> 
  ); 
} 

export default App;