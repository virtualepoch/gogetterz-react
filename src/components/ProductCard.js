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
      padding: "20px"
    },
    title: {
      width: "fit-content",
    },
    price: {
      width: "fit-content",
    },
    button: {
      width: "fit-content",
      padding: "0 10px",
      borderRadius: "10px",
    },
  };

  const product = props.product;

  return (
    <div style={style.card}>
      <div style={style.title}>{product.title}</div>
      <div style={style.price}>{product.price}</div>
      <button style={style.button}>Add To Cart</button>
    </div>
  );
}
