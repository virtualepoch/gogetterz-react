import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export function NavBar() {
  const style = {
    NavBar: {
      width: "100%",
      background: "black",
      position: "sticky",
      top: 0,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    menuBtn: {
      width: "60px",
      height: "60px",
      background: "transparent",
      border: "solid red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
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
      border: "solid blue",
    },
    logo: {
      width: "60px",
      height: "60px",
      border: "solid red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      height: "60px",
      background: "transparent",
      border: "solid red",
      color: "white",
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
    },
    cart: {
      width: "60px",
      height: "60px",
      border: "solid red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav style={style.NavBar}>
        <button style={style.menuBtn}>
          <div style={style.bar1}></div>
          <div style={style.bar2}></div>
          <div style={style.barX1}></div>
          <div style={style.barX2}></div>
        </button>
        <Link to={"/"}>
          <div style={style.logoTitleContainer}>
            <div style={style.logo} className="logo"></div>
            <h1 style={style.title}>GoGetterz</h1>
          </div>
        </Link>
        <Button style={style.cart} className="cart" onClick={handleShow}></Button>
      </nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is the body</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}
