import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../../RTK/Slice/cartSlice";
import { toast } from "react-toastify";
import Nophoto from "../images/Nophoto.png";
import { useState } from "react";

function ProductComponent(props) {
  const { product } = props;
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showToastMessage = () => {
    toast.success(`${product.title} Added To Cart`, {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      {product.images ? (
        <img
          src={product.images}
          className="card-img-top img-fluid"
          alt="..."
        />
      ) : (
        <img src={Nophoto} className="card-img-top img-fluid" alt="..." />
      )}

      <div>
        <FaShoppingCart
          className="shoppingcart-layout"
          onClick={() => {
            dispatch(addtocart(product));
            showToastMessage();
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.description.slice(0, 50)}...
          <Link
            to={`/info/${product.id}`}
            onClick={() => {
              scroll();
            }}
          >
            Read More
          </Link>
        </p>
        <span className="category-name">{product.category.name}</span>
        <div className="py-4">
          <sup>$</sup>
          <span className="fw-bold">{product.price}</span>
          <sup>00</sup>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
