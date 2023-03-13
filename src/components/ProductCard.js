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
    cardImg: {
      width: "100%",
    },
    title: {
      width: "fit-content",
    },
    price: {
      width: "fit-content",
    },
    button: {
      width: "200px",
      height: "50px",
      padding: "0 10px",
      borderRadius: "20px",
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
    btnContainer: {
      width: "200px",
      height: "60px",
      padding: "0 20px",
      borderRadius: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      margin: "0 auto",
      overflow: "hidden",
    },
    btnBorder: {
      width: "300px",
      height: "300px",
      padding: "0 20px",
      background: "conic-gradient(gold, transparent, gold, transparent, gold)",
      color: "white",
      border: "none",
      borderRadius: "10px",
      position: "absolute",
    },
    addToCartBtn: {
      width: "195px",
      height: "55px",
      padding: "0 20px",
      background: "radial-gradient(ellipse at 50% 50%, black, rgba(55, 55, 55, 0.8))",
      color: "white",
      border: "none",
      borderRadius: "100px",
      position: "absolute",
      boxShadow: "inset -2px 2px 5px 1px rgba(255, 255, 255, 0.5), inset 2px -2px 5px 1px black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    addToCartBtnText: {
      // filter: "drop-shadow(-0 -3px 5px gold) drop-shadow(0 3px 5px gold)",
      color: "white",
    },
  };

  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div style={style.card}>
      <img style={style.cardImg} src={product.imgUrl}></img>
      <div style={style.title}>{product.title}</div>
      <div style={style.price}>${product.price}</div>
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
        <div style={style.btnContainer}>
          <div style={style.btnBorder} className="btn-border"></div>
          <button style={style.addToCartBtn} onClick={() => cart.addOneToCart(product.id)}>
            <div style={style.addToCartBtnText} className="addToCartBtnText">ADD TO CART</div>
          </button>
        </div>
      )}
    </div>
  );
}
