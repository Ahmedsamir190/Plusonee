import { Link } from "react-router-dom";
import UseAuth from "../useAuth/UseAuth";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  FaRegHeart,
  FaCartPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaRegUserCircle,
  FaHouseUser,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import CircleLoader from "react-spinners/CircleLoader";
import { useState } from "react";

function NavBar() {
  const { currentUser } = UseAuth();
  const cartnumber = useSelector((state) => state.cart.cartProduct);

  const [loading, setloading] = useState(true);

  const logout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire("You LogOut", "We Hope See You Again", "success");
      })
      .catch((error) => {
        Swal.fire(error.message, "error");
      });
  };
  return (
    <header style={{ borderBottom: "3px solid black" }}>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link to="/" className="navbar-brand me-5">
            <h1 className="m-0" style={{ fontWeight: 900 }}>
              PluS One
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-items">
              <li className="nav-item">
                <Link to={"/"} className="text-dark  ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"About"} className="text-dark ">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"products"} className="text-dark ">
                  products
                </Link>
              </li>
              <li className="nav-item dropdown text-center">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaRegUserCircle className="fs-3" /> Account
                </a>
                <ul className="dropdown-menu p-3  ">
                  <li className="special">
                    {currentUser ? (
                      <div className="d-flex align-items-center justify-content-around">
                        <FaUser className="text-white " />
                        <span className="text-white ">{currentUser.email}</span>
                      </div>
                    ) : (
                      <Link
                        to={"/signin"}
                        className="text-white account text-decoration-none "
                      >
                        {" "}
                        <FaSignInAlt /> Sign In
                      </Link>
                    )}
                  </li>
                  {/* <li>
                    {currentUser ? (
                      <span className=" ">{currentUser.displayName}</span>
                    ) : (
                      <Link
                        to={"/signin"}
                        className=" account text-decoration-none "
                      >
                        {" "}
                        <FaSignInAlt /> Sign In
                      </Link>
                    )}
                  </li>

                  <li>
                    {currentUser ? (
                      <img src={currentUser.photoURL} alt={""} />
                    ) : (
                      <Link
                        to={"/signin"}
                        className=" account text-decoration-none "
                      >
                        {" "}
                        <FaSignInAlt /> Sign In
                      </Link>
                    )}
                  </li> */}
                  <li>
                    {currentUser && (
                      <div className="d-flex align-items-center gap-4">
                        <FaSignOutAlt />
                        <span
                          onClick={logout}
                          style={{ cursor: "pointer", fontWeight: "900" }}
                        >
                          logout
                        </span>
                      </div>
                    )}
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {loading && (
                      <Tippy
                        content="feature update now "
                        interactive={true}
                        interactiveBorder={20}
                        delay={100}
                        placement="bottom"
                      >
                        <div className="order">
                          <FaHouseUser className="fs-2" />
                          <span className="dropdown-item ">Order</span>{" "}
                          <CircleLoader
                            color="black"
                            loading={loading}
                            size={30}
                          />
                        </div>
                      </Tippy>
                    )}
                  </li>
                  <li>
                    {loading && (
                      <Tippy
                        content="feature update now "
                        interactive={true}
                        interactiveBorder={20}
                        delay={100}
                        placement="bottom"
                      >
                        <div className="save-items">
                          <FaRegHeart className="fs-2" />
                          <span className="dropdown-item  ">
                            Saved Items
                          </span>{" "}
                          <CircleLoader
                            color="black"
                            loading={loading}
                            size={30}
                          />
                        </div>
                      </Tippy>
                    )}
                  </li>
                </ul>
              </li>
            </ul>

            <div>
              {cartnumber.length >= 1 ? (
                <Link to={"/cart"}>
                  <div className="fs-3 cart text-danger text-center   ">
                    <FaCartPlus />
                    <span>{cartnumber.length}</span>
                  </div>
                </Link>
              ) : (
                <Link to={"/cart"}>
                  <div className="fs-3 cart text-dark text-center  ">
                    <FaCartPlus />
                    <span>{cartnumber.length}</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
