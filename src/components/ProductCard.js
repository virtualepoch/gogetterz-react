import { CartContext } from "../CartContext";
import { useContext } from "react";

export function ProductCard(props) {
  // props.product is the product we are selling
  const style = {
    card: {
      width: "100%",
      height: "fit-content",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      boxShadow: "0 2px 10px 1px lightgray",
    },
    cardImg: {
      width: "100%",
      borderRadius: "10px",
    },
    title: {
      width: "fit-content",
    },
    price: {
      width: "fit-content",
    },
    quantityRow: {
      width: "100% ",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "10px 0",
    },
    addSubtractRow: {
      width: "40%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    addBtn: {
      width: "50px",
      height: "50px",
      borderRadius: "50px",
      fontSize: "30px",
      background: "blue",
      border: "none",
      color: "white",
      boxShadow: "inset -2px 2px 5px 1px rgba(255, 255, 255, 0.5), inset 2px -2px 5px 1px rgba(55, 55, 55, 0.5), 0 2px 10px 1px gray",
    },
    subtractBtn: {
      width: "50px",
      height: "50px",
      borderRadius: "50px",
      fontSize: "30px",
      background: "rgb(200, 0, 0)",
      border: "none",
      color: "white",
      boxShadow: "inset -2px 2px 5px 1px rgba(255, 255, 255, 0.5), inset 2px -2px 5px 1px rgba(55, 55, 55, 0.5), 0 2px 10px 1px gray",
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
      boxShadow: " 0 2px 5px 1px lightgray",
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
      background: "radial-gradient(ellipse at 50% 50%, rgb(0, 35, 255), rgba(55, 55, 55, 0.8))",
      color: "white",
      border: "none",
      borderRadius: "100px",
      position: "absolute",
      boxShadow: "inset -2px 2px 5px 1px rgba(255, 255, 255, 0.5), inset 2px -2px 5px 1px black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    removeAllBtn: {
      width: "130px",
      height: "40px",
      marginTop: "30px",
      borderRadius: "40px",
      background: "rgb(200, 0, 0)",
      border: "none",
      color: "white",
      boxShadow: "inset -2px 2px 5px 1px rgba(255, 255, 255, 0.5), inset 2px -2px 5px 1px rgba(55, 55, 55, 0.5), 0 2px 10px 1px gray",
    },
  };

  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div style={style.card}>
      <img style={style.cardImg} src={product.imgUrl} alt={product.altTag}></img>
      <div style={style.title}>{product.title}</div>
      <div style={style.price}>${product.price}</div>
      {productQuantity > 0 ? (
        <>
          <div style={style.quantityRow}>
            <div>In Cart: {productQuantity}</div>
            <div style={style.addSubtractRow}>
              <button style={style.addBtn} type="button" onClick={() => cart.addOneToCart(product.id)}>
                +
              </button>
              <button style={style.subtractBtn} type="button" onClick={() => cart.removeOneFromCart(product.id)}>
                -
              </button>
            </div>
          </div>
          <button style={style.removeAllBtn} type="button" onClick={() => cart.deleteFromCart(product.id)}>
            Remove All
          </button>
        </>
      ) : (
        <div style={style.btnContainer}>
          <div style={style.btnBorder} className="btn-border"></div>
          <button style={style.addToCartBtn} onClick={() => cart.addOneToCart(product.id)}>
            <div className="addToCartBtnText">ADD TO CART</div>
          </button>
        </div>
      )}
    </div>
  );
}
