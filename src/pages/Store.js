import { ProductCard } from "../components/ProductCard";
import { productsArray } from "../productsStore";

export function Store() {
  const style = {
    itemContainer: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gap: "20px",
    },
    item: {
      borderRadius: "10px",
      boxShadow: "0 0 10px gray",
    }
  };

  return (
    <>
      <h1>Welcome to the store front.</h1>
      <div style={style.itemContainer} className="itemContainer">
        {productsArray.map((product, idx) => (
          <div style={style.item} key={idx}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
