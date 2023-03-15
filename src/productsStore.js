import hoodieWhite01 from "./assets/images/card-images/hoodie_white_500.jpg";
import hoodieBlack01 from "./assets/images/card-images/hoodie_black_500.jpg";
import hoodieCamo from "./assets/images/card-images/hoodie_camo.jpg";
import hoodiePink from "./assets/images/card-images/hoodie_pink.jpg";
import hat01 from "./assets/images/card-images/hat_01_500.jpg";
import hat02 from "./assets/images/card-images/hat_02_500.jpg";
import sticker01 from "./assets/logos/gogetterz_01_500.png";

const productsArray = [
  {
    id: "1",
    title: "T-Shirt - White",
    price: 29.99,
    imgUrl: hoodieWhite01,
    altTag: "t-shirt-white",
  },
  {
    id: "2",
    title: "T-Shirt - Black",
    price: 29.99,
    imgUrl: hoodieBlack01,
    altTag: "t-shirt-black",
  },
  {
    id: "3",
    title: "Hoodie - White",
    price: 49.99,
    imgUrl: hoodieWhite01,
    altTag: "hoodie-white",
  },
  {
    id: "4",
    title: "Hoodie - Black",
    price: 49.99,
    imgUrl: hoodieBlack01,
    altTag: "hoodie-black",
  },
  {
    id: "5",
    title: "Hoodie - Camo",
    price: 59.99,
    imgUrl: hoodieCamo,
    altTag: "hoodie-camo",
  },
  {
    id: "6",
    title: "Hoodie - Pink",
    price: 59.99,
    imgUrl: hoodiePink,
    altTag: "hoodie-pink",
  },
  {
    id: "7",
    title: "Hat",
    price: 34.99,
    imgUrl: hat01,
    altTag: "hat",
  },
  {
    id: "8",
    title: "Hat",
    price: 34.99,
    imgUrl: hat02,
    altTag: "hat",
  },
  {
    id: "9",
    title: "Sticker",
    price: 4.99,
    imgUrl: sticker01,
    altTag: "sticker",
  },
  {
    id: "10",
    title: "Sticker",
    price: 4.99,
    imgUrl: sticker01,
    altTag: "sticker",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined; // this code isn't needed but makes logic easier to understand.
  }

  return productData;
}

export { productsArray, getProductData };
