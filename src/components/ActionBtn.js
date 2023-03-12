import { Link } from "react-router-dom";
export function ActionBtn() {
  const style = {
    btnContainer: {
      width: "200px",
      height: "60px",
      padding: "0 20px",
      borderRadius: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: "20px",
      left: 0,
      right: 0,
      margin: "0 auto",
      overflow: "hidden",
    },
    btnBorder: {
      width: "300px",
      height: "300px",
      padding: "0 20px",
      background: "conic-gradient(gold, aqua, gold, aqua, gold)",
      color: "white",
      border: "none",
      borderRadius: "10px",
      position: "absolute",
    },
    actionBtn: {
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
  };

  return (
    <div style={style.btnContainer}>
      <div style={style.btnBorder} className="btn-border"></div>
      <Link style={style.actionBtn} to={"/store"}>
        GO TO STORE
      </Link>
    </div>
  );
}
