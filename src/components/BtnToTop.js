import React, { useRef } from "react";

export function BtnToTop() {
  const toTopBtn = useRef(null);

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      toTopBtn.current.style.transform = "none";
    } else {
      toTopBtn.current.style.transform = "translateY(200%)";
    }

    // if (window.innerWidth < 700) {
    //   toTopBtn.current.style.transition = "none";
    // }
  });

  function ScrollToTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }

  var styles = {
    toTopBtn: {
      width: "50px",
      height: "50px",
      position: "fixed",
      right: "15px",
      bottom: "40px",
      zIndex: 98,
      border: "none",
      borderRadius: "50%",
      boxShadow: "inset -2px 2px 5px 1px lightgray, inset 2px -2px 5px 1px gray, -1px 1px 3px 1px rgb(0, 0, 0, 0.3)",
      background: "radial-gradient(gray, rgb(55, 55, 55))",
      cursor: "pointer",
      transform: "translateY(200%)",
      transition: "all 200ms ease-in-out",
    },
    arrowLine: {
      width: "40%",
      height: "7%",
      position: "absolute",
      top: "44%",
      left: "17%",
      background: "gold",
      filter: "drop-shadow(0 0 3px gold)",
      transform: "rotate(-40deg)",
      borderRadius: "10px",
      // pointerEvents: "none",
    },
    arrowLine2: {
      left: null,
      right: "17%",
      transform: "rotate(40deg)",
    },
  };

  return (
    <button className="to-top-btn" style={styles.toTopBtn} ref={toTopBtn} onClick={ScrollToTop}>
      <div style={styles.arrowLine}></div>
      <div style={{ ...styles.arrowLine, ...styles.arrowLine2 }}></div>
    </button>
  );
}
