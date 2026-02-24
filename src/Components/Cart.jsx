import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item-row">
          <div className="cart-item-details">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div>
              <div>{item.title}</div>
              <div>${item.price.toFixed(2)} each</div>
            </div>
          </div>
          <div className="cart-item-actions">
            <button
              className="cart-quantity-button"
              onClick={() => decrementQuantity(item.id)}
            >
              -
            </button>
            <span className="cart-quantity">{item.quantity}</span>
            <button
              className="cart-quantity-button"
              onClick={() => incrementQuantity(item.id)}
            >
              +
            </button>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <button
              className="cart-remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;

