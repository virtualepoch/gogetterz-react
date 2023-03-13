import img01 from "./assets/images/01.jpg";
import img02 from "./assets/images/02.jpg";
import img03 from "./assets/images/03.jpg";
import img04 from "./assets/images/04.jpg";

const productsArray = [
  {
    id: "1",
    title: "T-Shirt - White",
    price: 29.99,
    imgUrl: img01,
  },
  {
    id: "2",
    title: "T-Shirt - Black",
    price: 29.99,
    imgUrl: img02,
  },
  {
    id: "3",
    title: "Hoodie - White",
    price: 49.99,
    imgUrl: img03,
  },
  {
    id: "4",
    title: "Hoodie - Black",
    price: 49.99,
    imgUrl: img04,
  },
  {
    id: "5",
    title: "Hoodie - Camo",
    price: 59.99,
  },
  {
    id: "6",
    title: "Hoodie - Pink",
    price: 59.99,
  },
  {
    id: "7",
    title: "Hat",
    price: 34.99,
  },
  {
    id: "8",
    title: "Sticker",
    price: 4.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined; // this code isn't needed but makes logic easier to understand.
  }

  return productData;
}

export { productsArray, getProductData };
