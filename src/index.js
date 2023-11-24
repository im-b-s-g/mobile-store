import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./template/HomePage";
import Cart from "./template/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./template/Navbar";
import EmptyCart from "./template/EmptyCart";
import { Provider } from "react-redux";
import { store } from "./state/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  { path: "/EmptyCart", element: <EmptyCart /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
