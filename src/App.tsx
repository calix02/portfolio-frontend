import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPortfolio } from "./pages/MainPortfolio";
import NotFound from "./pages/NotFound";

// ✅ Moved outside the component — created only once
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPortfolio,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

function App() {
  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#18181b",
            color: "#f4f4f5",
            border: "1px solid #3f3f46",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#18181b",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#18181b",
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
