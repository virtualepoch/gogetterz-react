import { CartContext } from "../CartContext";
import { useContext } from "react";

export function ProductCard(props) {
  // props.product is the product we are selling
  const style = {
    card: {
      width: "100%",
      height: "fit-content",
      border: "1px solid darkgray",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    title: {
      width: "fit-content",
    },
    price: {
      width: "fit-content",
    },
    button: {
      width: "fit-content",
      padding: "0 10px",
      borderRadius: "10px",
    },
    addBtn: {
      width: "40px",
      padding: "0 10px",
      borderRadius: "10px",
    },
    subtractBtn: {
      width: "40px",
      padding: "0 10px",
      borderRadius: "10px",
    },
  };

  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div style={style.card}>
      <div style={style.title}>{product.title}</div>
      <div style={style.price}>{product.price}</div>
      {productQuantity > 0 ? (
        <>
          <div style={style.quantityRow}>
            <div>In Cart: {productQuantity}</div>
            <button style={style.addBtn} type="button" onClick={() => cart.addOneToCart(product.id)}>
              +
            </button>
            <button style={style.subtractBtn} type="button" onClick={() => cart.removeOneFromCart(product.id)}>
              -
            </button>
          </div>
          <button style={style.removeAllBtn} type="button" onClick={() => cart.deleteFromCart(product.id)}>
            Remove All
          </button>
        </>
      ) : (
        <button style={style.button} onClick={() => cart.addOneToCart(product.id)}>
          Add To Cart
        </button>
      )}
    </div>
  );
}
