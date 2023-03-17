export function Footer() {
  const style = {
    footer: {
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "white",
      margin: "100px auto",
      borderTop: "solid 50px",
    },
    socialMediaRow: {
      width: "fit-content",
      maxWidth: "100%",
      padding: "50px 20px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    },
    policiesRow: {
      width: "fit-content",
      maxWidth: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      padding: "10px 20px",
    },
  };
  return (
    <div style={style.footer}>
      <div style={style.socialMediaRow}>
        <div className="social-media-icon instagram"></div>
        <div className="social-media-icon facebook"></div>
        <div className="social-media-icon twitter"></div>
      </div>
      <div style={style.policiesRow}>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>Report Issues with Website</p>
      </div>
    </div>
  );
}
