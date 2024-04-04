import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Signup from "./pages/SIgnup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  // {
  //   path: "/",
  //   element: <Counter />,
  // },
  // {
  //   path: "/join",
  //   element: <Signup />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </RecoilRoot>
);
