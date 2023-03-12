import React, { useContext, useRef, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { CartProduct } from "./CartProduct";

export function HeaderNavMenuCart() {
  // element styling
  const styleHeader = {
    // header elements
    mainHeader: {
      width: "100%",
      background: "linear-gradient(to left, transparent, black, transparent)",
      backdropFilter: "blur(5px)",
      boxShadow: "0 3px 10px 1px rgba(0,0,0,0.4)",
      position: "sticky",
      top: 0,
      zIndex: "8888",
      margin: "0 auto",
      display: "flex",
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
    cartBtnQuantity: {
      transform: "translate(3px, -6px)",
      color: "red",
    },
  };
  // nav styling is in App.css
  const styleModal = {
    modalContainer: {
      width: "100%",
      top: "65px",
    },
  };

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
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props} className="link">
          {children}
        </Link>
      </li>
    );
  }

  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

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
        <ul>
          <CustomLink className="link1" onClick={openCloseNavMenu} to={"/"}>
            HOME
          </CustomLink>
          <CustomLink className="link2" onClick={openCloseNavMenu} to={"/store"}>
            STORE
          </CustomLink>
          <CustomLink className="link3" onClick={openCloseNavMenu} to={"/about"}>
            ABOUT
          </CustomLink>
          <CustomLink className="link4" onClick={openCloseNavMenu} to={"/contact"}>
            CONTACT
          </CustomLink>
        </ul>
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
