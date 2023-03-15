import { ProductCard } from "../components/ProductCard";
import { productsArray } from "../productsStore";

export function Store() {
  const style = {
    storeH1: {
      margin: "40px auto",
    },
    itemContainer: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    item: {
      borderRadius: "10px",
      boxShadow: "0 2px 5px lightgray",
    },
  };

  return (
    <>
     
      <h1 style={style.storeH1}>Welcome to the store front.</h1>
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
