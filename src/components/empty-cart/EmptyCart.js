import { FaShoppingBasket } from "react-icons/fa";

function EmptyCart() {
  return (
    <section>
      <div className="Empty-cart">
        <p>
          Your shopping bag
          <FaShoppingBasket className="shopping-icon" /> is Empty
        </p>
      </div>
    </section>
  );
}

export default EmptyCart;
