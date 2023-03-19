export function Footer() {
  const style = {
    footer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "white",
      marginTop: "100px",
      paddingBottom: "100px",
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
      gap: "30px",
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
    <footer style={style.footer}>
      <div style={style.socialMediaRow}>
        <a className="social-media-link instagram" href="https://www.instagram.com/kingcobrakang/" title="Instagram Profile" target="_blank" rel="noreferrer">
          <p className="visually-hidden">Link to Instagram</p>
        </a>

        <a className="social-media-link facebook" href="https://www.facebook.com/KingKang711" title="Facebook Profile" target="_blank" rel="noreferrer">
          <p className="visually-hidden">Link to Facebook</p>
        </a>
      </div>
      <div style={style.policiesRow}>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>Report Issues with Website</p>
      </div>
    </footer>
  );
}
