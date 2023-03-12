import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { CartProduct } from "./CartProduct";

export function NavBar() {
  const style = {
    NavBar: {
      width: "100%",
      background: "linear-gradient(to left, transparent, black, transparent)",
      backdropFilter: "blur(5px)",
      boxShadow: "0 3px 10px 1px rgba(0,0,0,0.4)",
      position: "sticky",
      top: 0,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    menuBtn: {
      width: "56px",
      height: "56px",
      margin: "2px",
      background: "radial-gradient(gray, rgb(55, 55, 55))",
      border: "none",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "inset -2px 2px 5px 1px gray, inset 2px -2px 5px 1px black",
      filter: "drop-shadow(0 0 5px white)",
    },
    bar1: {
      width: "30px",
      height: "2px",
      background: "white",
      position: "absolute",
      transform: "translateY(-5px)",
    },
    bar2: {
      width: "30px",
      height: "2px",
      background: "white",
      position: "absolute",
      transform: "translateY(5px)",
    },
    barX1: {
      width: "30px",
      height: "2px",
      background: "white",
      display: "flex",
      position: "absolute",
      transform: "rotate(45deg)",
      transformOrigin: "center",
    },
    barX2: {
      width: "30px",
      height: "2px",
      background: "white",
      display: "flex",
      position: "absolute",
      transform: "rotate(-45deg)",
      transformOrigin: "center",
    },
    logoTitleContainer: {
      width: "fit-content",
      height: "60px",
      display: "flex",
      alignItems: "center",
    },
    logo: {
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      height: "60px",
      background: "transparent",
      color: "white",
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
      textDecoration: "none",
    },
    cart: {
      width: "56px",
      height: "56px",
      margin: "2px",
      border: "none",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "inset -2px 2px 5px 1px gray, inset 2px -2px 5px 1px black",
      filter: "drop-shadow(0 0 5px white)",
    },
    cartQuantity: {
      transform: "translate(3px, -6px)",
      color: "red",
    },
    modalContainer: {
      width: "100%",
    },
  };

  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <nav style={style.NavBar}>
        <button style={style.menuBtn} className="menuBtn">
          <div style={style.bar1}></div>
          <div style={style.bar2}></div>
          <div style={style.barX1}></div>
          <div style={style.barX2}></div>
        </button>
        <Link to={"/"}>
          <div style={style.logoTitleContainer}>
            <div style={style.logo} className="logo"></div>
            <h1 style={style.title} className="text-decoration-none">
              GoGetterz
            </h1>
          </div>
        </Link>
        <button style={style.cart} className="cart" onClick={handleShow}>
          <div style={style.cartQuantity}>{productsCount}</div>
        </button>
      </nav>
      <Modal style={style.modalContainer} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <button type="button">Purchase items!</button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
