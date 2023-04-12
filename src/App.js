import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Router,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Loading from "./components/loading-animation/Loading-animation";
import NavBar from "./components/Navbar/Navbar";
import "./main.css";
import LandingOne from "./Pages/Landing-one/Landing-one";
import LandingTwo from "./Pages/landing-two/Landing-Two";
import Info from "./Pages/products/Info";
import Products from "./Pages/products/Products";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/about/About";
import CheckOut from "./Pages/checkout/CheckOut";
import SignIn from "./Pages/signIn-signUp/SignIn";
import SignUp from "./Pages/signIn-signUp/SignUp";
import ProtectRoute from "./components/protectroute/ProtectRoute";
import Success from "./Pages/checkout/Success";
import RiseLoader from "react-spinners/RiseLoader";

function App() {
  const [loading, setloading] = useState(true);
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/register";

  setTimeout(() => {
    setloading(false);
  }, 3000);

  // const pathrouter = createBrowserRouter([
  //   <NavBar />,

  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Carousel /> <LandingOne /> <LandingTwo />
  //       </>
  //     ),
  //   },

  //   { path: "products", element: <Products /> },
  //   { path: "/info/:ProductID", element: <Info /> },
  //   { path: "Cart", element: <Cart /> },
  //   { path: "About", element: <About /> },
  //   {
  //     path: "/*",
  //     element: <ProtectRoute />,
  //     children: [
  //       { path: "checkout", element: <CheckOut /> },
  //       { path: "success", element: <Success /> },
  //     ],
  //   },
  //   <Footer />,

  //   { path: "signin", element: <SignIn /> },
  //   { path: "register", element: <SignUp /> },
  // ]);

  return (
    <div className="App">
      <>
        {!isAuthPage && <NavBar />}

        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Carousel /> <LandingOne /> <LandingTwo />
              </>
            }
          />
          <Route path="products" element={<Products />} />
          <Route path="/info/:ProductID" element={<Info />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="About" element={<About />} />

          <Route path="/*" element={<ProtectRoute />}>
            <Route path="checkout" element={<CheckOut />} />
            <Route path="success" element={<Success />} />
          </Route>

          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
        </Routes>
        {!isAuthPage && <Footer />}
      </>
    </div>
  );
}

export default App;
