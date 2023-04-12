import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaTrashAlt } from "react-icons/fa";
import {
  Clear,
  Decrement,
  Deleted,
  GetTotalPrice,
  Increment,
  GetTotalQuantity,
} from "../../RTK/Slice/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import EmptyCart from "../../components/empty-cart/EmptyCart";
import { useState } from "react";
import Nophoto from "../../components/images/Nophoto.png";

function Cart() {
  const productincart = useSelector((state) => state.cart.cartProduct);
  const price = useSelector((state) => state.cart.cartTotalAmount);
  const quantity = useSelector((state) => state.cart.cartTotalQuantity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTotalPrice());
    dispatch(GetTotalQuantity());
  }, [productincart, dispatch]);

  // const totalprice = productincart.reduce((acc, product) => {
  //   acc += product.price * product.quantity;
  //   return acc;
  // }, 0);

  // const total_quantity = productincart.reduce((cartquantity, cartitem) => {
  //   return cartquantity + cartitem.quantity;
  // }, 0);

  const showToastMessage = () => {
    toast.success(`Item Removed`, {
      position: toast.POSITION.TOP_LEFT,
    });
  };
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="cart-table">
        <div className="container tab-container">
          <div className="d-flex justify-content-between align-items-center  flex-md-row pb-5">
            <h1>Cart</h1>
            <Link to={"/products"} className="fs-3">
              {" "}
              <FaArrowCircleRight /> Back
            </Link>
          </div>
          <table className="table  table-hover">
            {productincart.length >= 1 ? (
              <>
                <thead>
                  <tr>
                    {/* <th scope="col">id</th> */}
                    <th scope="col">title</th>
                    <th scope="col">image</th>
                    <th scope="col">quantity</th>
                    <th scope="col">price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {productincart.map((products) => {
                    return (
                      <tr key={products.id}>
                        {/* <td>{productc.id}</td> */}
                        <td className="w-50">{products.title}</td>
                        <td>
                          {products.images ? (
                            <img
                              src={products.images}
                              className="img-product-id"
                              alt="..."
                            />
                          ) : (
                            <img
                              src={Nophoto}
                              className="img-product-id"
                              alt="..."
                            />
                          )}
                        </td>
                        <td className="numberandicon">
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => dispatch(Decrement(products))}
                          >
                            -
                          </button>
                          {products.quantity}
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => dispatch(Increment(products))}
                          >
                            +
                          </button>
                        </td>
                        <td>{products.price}$</td>
                        <td>
                          <FaTrashAlt
                            className="trash-icon"
                            onClick={() => {
                              dispatch(Deleted(products));
                              toast.success(`${products.title} Removed`, {
                                position: toast.POSITION.TOP_LEFT,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="2" scope="row">
                      Total
                    </th>

                    <td>{quantity}</td>

                    <td>${price} </td>
                    <td>
                      {/* <button
                        className="btn btn-outline-danger"
                        onClick={() => dispatch(Clear())}
                      >
                        Clear-Cart
                      </button> */}
                      <Link
                        to={"/checkout"}
                        className="btn btn-outline-dark"
                        onClick={() => {
                          scroll();
                        }}
                      >
                        CheckOut
                      </Link>
                    </td>
                  </tr>
                </tfoot>
              </>
            ) : (
              <EmptyCart />
            )}
          </table>
        </div>
      </div>
    </section>
  );
}

export default Cart;
