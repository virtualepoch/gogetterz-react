import { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsStore";

export function CartProduct(props) {
  const style = {
    removeItemBtn: {
      border: "none",
      borderRadius: "10px",
      padding: "5px 10px",
      background: "rgb(200, 0, 0)",
      border: "none",
      color: "white",
      boxShadow: "inset -2px 2px 5px 1px rgba(255, 255, 255, 0.5), inset 2px -2px 5px 1px rgba(55, 55, 55, 0.5), 0 2px 10px 1px gray",
    },
  };

  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <button style={style.removeItemBtn} onClick={() => cart.deleteFromCart(id)}>
        Remove
      </button>
      <hr></hr>
    </>
  );
}
