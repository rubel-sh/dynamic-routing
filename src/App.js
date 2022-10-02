import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Help from "./components/Main/Help/Help";
import Home from "./components/Main/Home/Home";
import Orders from "./components/Main/Orders/Orders";
import Shop from "./components/Main/Shop/Shop";

function App() {
  const routers = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/orders", element: <Orders /> },
    { path: "/help", element: <Help /> },
  ]);
  return (
    <div className="container mx-auto mt-10">
      {/* <Header /> */}
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
