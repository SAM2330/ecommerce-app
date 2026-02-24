import { useContext } from "react";
import { CartContext } from "../Context/CardContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <h2>My Store 🛒 ({totalItems})</h2>
    </div>
  );
}

export default Navbar;