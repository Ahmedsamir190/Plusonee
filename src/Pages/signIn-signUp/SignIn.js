import signin from "../../components/images/signin.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisiblePass } from "../../RTK/Slice/PassToggle";
import { useEffect, useRef, useState } from "react";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { async } from "@firebase/util";
import RiseLoader from "react-spinners/RiseLoader";
import Nophoto from "../../components/images/Nophoto.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  /* validation form*/
  const [validation, setValidation] = useState(false);

  let validationcondition = validation ? "was-validated" : "novalidate";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      Swal.fire("Done", "You Logged in", "success");
      navigate("/checkout");
      setloading(false);
    } catch (error) {
      Swal.fire("Email or Password ", "incorrect", "error");
      setloading(false);
    }
  };

  /*toggle password*/
  const togglepass = useSelector((state) => state.PassToggle.visiblePass);
  let condition = togglepass ? "text" : "password";

  const dispatch = useDispatch();
  let Handlepass = () => {
    dispatch(toggleVisiblePass());
  };

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <section>
      <div>
        <div className="signin-page">
          {loading ? (
            <div className="overlay">
              <RiseLoader color="black" loading={loading} size={20} />
            </div>
          ) : (
            <>
              <div className="photo">
                <img src={signin} alt={Nophoto} className="img-fluid" />
              </div>
              <div className="form d-flex justify-content-center align-items-center flex-column">
                <div className="plusone-title">
                  <Link to="/" className="text-decoration-none">
                    <h3 className="text-dark">plusone</h3>
                  </Link>
                  <FaShoppingCart className="fs-1" />
                </div>
                <div className="">
                  <h1 className="fs-1">Sign In</h1>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className={`${validationcondition} `}
                >
                  <label
                    htmlFor="validationCustom01"
                    className="form-label mb-3 text-secondary"
                  >
                    Email
                  </label>
                  <div className="email">
                    <input
                      type="email"
                      ref={ref}
                      className="form-control"
                      placeholder="Example@mail.com"
                      id="validationCustom01"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <span>
                      <FiMail />
                    </span>
                    <div className="invalid-feedback">
                      Please provide a valid email.
                    </div>
                  </div>

                  <label
                    htmlFor="validationCustom02"
                    className="form-label my-3 text-secondary"
                  >
                    password
                  </label>

                  <div className="password">
                    <input
                      type={condition}
                      className="form-control"
                      placeholder="password"
                      id="validationCustom02"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {togglepass ? (
                      <span>
                        <FaEye
                          className="eye-icon"
                          onClick={() => {
                            Handlepass();
                          }}
                        />
                      </span>
                    ) : (
                      <span>
                        <FaRegEyeSlash
                          className="eye-icon"
                          onClick={() => {
                            Handlepass();
                          }}
                        />
                      </span>
                    )}

                    <div className="invalid-feedback">
                      Please provide a valid password.
                    </div>
                  </div>
                  <div className="forgotpassword">
                    <input id="rememberme" type="checkbox" />
                    <label htmlFor="rememberme" className="my-3 text-secondary">
                      {" "}
                      Remember me
                    </label>
                    <span>Forgot password?</span>
                  </div>
                  <div className="signin-button">
                    <input
                      type="submit"
                      value={"Sign In"}
                      className="btn btn-dark my-3 w-100"
                      onClick={() => {
                        setValidation(true);
                      }}
                    />
                  </div>
                  <div className="signup-button gap-2">
                    <span className="text-secondary ">Not a member?</span>
                    <Link to={"/register"}>Sign Up Now</Link>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignIn;
