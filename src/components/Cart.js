// Cart.js
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const totalCost = useSelector((state) => state.totalCost);
  const dispatch = useDispatch();

  function removeItem(product) {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  }

  function updateQuantity(product, quantity) {
    if (quantity <= 0) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { name: product.name, quantity },
    });
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.name} className="cart-item">
            <div className="cart-item-info">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.cost}</p>
              <div className="quantity-control">
                <button
                  onClick={() => updateQuantity(product, product.quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product, parseInt(e.target.value))
                  }
                />
                <button
                  onClick={() => updateQuantity(product, product.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button onClick={() => removeItem(product)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total: ${totalCost.toFixed(2)}</h3>
    </div>
  );
}
