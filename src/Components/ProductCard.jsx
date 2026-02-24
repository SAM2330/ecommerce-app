import { CartContext } from "../Context/CardContext";
import { useContext } from "react";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img
        className="product-card-image"
        src={product.image}
        alt={product.title}
      />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;