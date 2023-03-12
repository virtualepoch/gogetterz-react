import { ProductCard } from "../components/ProductCard";
import { productsArray } from "../productsStore";

export function Store() {
  const style = {
    itemContainer: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      border: "solid red",
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      gap: "20px",
    },
  };

  return (
    <>
      <h1>Welcome to the store front.</h1>
      <div style={style.itemContainer}>
        {productsArray.map((product, idx) => (
          <div style={style.item} key={idx}>
            <ProductCard product={product}/>
          </div>
        ))}
      </div>
    </>
  );
}
