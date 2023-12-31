import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { GetTotalPrice, Clear } from "../../RTK/Slice/cartSlice";
import { Link } from "react-router-dom";

function Success() {
  const productincart = useSelector((state) => state.cart.cartProduct);

  const price = useSelector((state) => state.cart.cartTotalAmount);
  const date = new Date();
  const displaydate = date.toDateString();
  const displaytime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTotalPrice());
  }, [productincart, dispatch]);

  return (
    <section>
      <div className="successpage">
        <div className="container">
          <div className="content-success">
            <div className="text-center">
              <FaCheckCircle className="mb-5 fs-1 text-success" />
              <h4 className="mb-4">
                Congratulation! You’ve completed payment.
              </h4>
              <p className="text-secondary">
                {" "}
                We have recieved your order and it will be delivered very soon
              </p>
            </div>
            <div className="details">
              <div className="text-center deta-one">
                <h5 className="mb-md-4">Order serial</h5>
                <span className="text-secondary">70505</span>
              </div>
              <div className="text-center deta-one">
                <h5 className="mb-md-4">Date</h5>
                <div className="d-grid">
                  <span className="text-secondary">{displaydate}</span>
                  <span className="text-secondary">{displaytime}</span>
                </div>
              </div>
              <div className="text-center deta-one">
                <h5 className="mb-md-4">Total</h5>
                <span className="text-secondary">${price + 50}</span>
              </div>
              <div className="text-center   ">
                <h5 className="mb-md-4">Payment methods</h5>
                <span className="text-secondary">Check payment</span>
              </div>
            </div>
            <div className="back-to-store">
              <Link
                to={"/products"}
                type="button"
                className="btn btn-dark"
                onClick={() => dispatch(Clear())}
              >
                Back To Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Success;
