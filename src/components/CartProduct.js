import { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsStore";

export function CartProduct(props) {
  const style = {
    removeItemBtn: {
      borderRadius: "10px",
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
