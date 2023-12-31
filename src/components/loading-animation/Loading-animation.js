import { FaShoppingCart } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";

function Loading() {
  return (
    <div className="loading-logo">
      <h1 className="text-white">Loading</h1>
      <div className="loading-icon">
        <FaRunning className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </div>
  );
}
export default Loading;
