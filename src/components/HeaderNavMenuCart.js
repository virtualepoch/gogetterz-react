import React, { useContext, useRef, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { CartProduct } from "./CartProduct";
import "./header.css";

export function HeaderNavMenuCart() {
  // navMenu logic
  const navMenu = useRef(null);
  const navMenuBtn = useRef(null);

  function openCloseNavMenu() {
    navMenu.current.classList.toggle("open");
    navMenuBtn.current.classList.toggle("open");
  }

  // MUST HAVE: When 'SITE-LOGO' or 'SITE-TITLE' are clicked this CLOSES the 'NAV-MENU' (if open) and prevents it from opening (if closed).
  function closeNavMenu() {
    if (navMenu.current.classList.contains("open")) {
      navMenu.current.classList.remove("open");
      navMenuBtn.current.classList.remove("open");
    }
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <Link to={to} {...props} className={isActive ? "active link" : "link"}>
        {children}
      </Link>
    );
  }

  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  // element styling
  const styleHeader = {
    // header elements
    mainHeader: {
      width: "100%",
      background: "linear-gradient(to left, rgba(100, 100, 100, 0.7), rgba(0, 0, 0, 0.7), rgba(100, 100, 100, 0.7))",
      backdropFilter: "blur(5px)",
      boxShadow: "0 3px 10px 1px rgba(0,0,0,0.4)",
      position: "sticky",
      top: 0,
      zIndex: "100",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
    },
    // navMenuBtn styling is in App.css
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
      filter: "drop-shadow(0 0 2px gold)",
    },
    title: {
      height: "60px",
      background: "transparent",
      color: "white",
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
      textDecoration: "none",
      filter: "drop-shadow(0 0 3px gold)",
    },
    cartBtn: {
      width: "56px",
      minWidth: "56px",
      height: "56px",
      margin: "2px",
      border: "none",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "inset -2px 2px 5px 1px gray, inset 2px -2px 5px 1px rgba(0, 0, 0, 0.4)",
    },
    cartBtnQuantity: {
      transform: "translate(1px, -8px)",
      color: "red",
    },
  };
  // nav styling is in header.css
  const styleModal = {
    modalContainer: {
      width: "100%",
      maxWidth: "1200px",
      MarginBottom: "20px",
      paddingBottom: "50px",
      overflow: "auto",
    },
    purchaseBtn: {
      width: "200px",
      height: "50px",
      padding: "0 20px",
      margin: "30px auto",
      background: "radial-gradient(ellipse at 50% 50%, rgb(0, 35, 255), rgba(55, 55, 55, 0.8))",
      color: "white",
      border: "none",
      borderRadius: "100px",
      position: "relative",
      left: 0,
      right: 0,
      boxShadow: "inset -2px 2px 5px 1px rgba(255, 255, 255, 0.5), inset 2px -2px 5px 1px black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <>
      <header style={styleHeader.mainHeader}>
        <button className="button-nav-menu" ref={navMenuBtn} onClick={openCloseNavMenu}>
          <div className="open-bars"></div>
          <div className="close-bars"></div>
        </button>
        <Link to={"/"}>
          <div style={styleHeader.logoTitleContainer} onClick={closeNavMenu}>
            <div style={styleHeader.logo} className="logo"></div>
            <h1 style={styleHeader.title} className="text-decoration-none">
              GoGetterz
            </h1>
          </div>
        </Link>
        <button style={styleHeader.cartBtn} className="cartBtn" onClick={handleShow}>
          <div style={styleHeader.cartBtnQuantity}>{productsCount}</div>
        </button>
      </header>

      <nav className="main-nav" ref={navMenu}>
        <CustomLink onClick={openCloseNavMenu} to={"/"}>
          HOME
        </CustomLink>
        <CustomLink onClick={openCloseNavMenu} to={"/store"}>
          STORE
        </CustomLink>
        <CustomLink onClick={openCloseNavMenu} to={"/about"}>
          ABOUT
        </CustomLink>
        <CustomLink onClick={openCloseNavMenu} to={"/contact"}>
          CONTACT
        </CustomLink>
      </nav>

      <Modal style={styleModal.modalContainer} show={show} onHide={handleClose}>
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

              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

              <button style={styleModal.purchaseBtn} type="button" onClick={checkout}>
                Purchase items!
              </button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
