import hoodieWhite from "./assets/images/product-images/hoodies/hoodie_white.jpg";
import hoodieBlack from "./assets/images/product-images/hoodies/hoodie_black.jpg";
import hoodieCamo from "./assets/images/product-images/hoodies/hoodie_camo.jpg";
import hoodiePink from "./assets/images/product-images/hoodies/hoodie_pink.jpg";
import hatBlackFrontBack from "./assets/images/product-images/hats/hat_black_front_back.jpeg";
import hatBlackDadFrontBack from "./assets/images/product-images/hats/hat_blackdad_front_back.jpeg";
import sticker01 from "./assets/logos/gogetterz_01_500.png";

// item 1: price_1Mm3F2CN1wLnjqgADJorAxTF
// item 2: price_1Mm3GoCN1wLnjqgAzVkCHt9A

const productsArray = [
  {
    // id: "1",
    id: "price_1Mm4H2CN1wLnjqgAsMBWqh6F",
    title: "T-Shirt - White",
    price: 29.99,
    imgUrl: hoodieWhite
  ,
    altTag: "t-shirt-white",
  },
  {
    // id: "2",
    id: "price_1Mm43MCN1wLnjqgAMiBGr7uY",
    title: "T-Shirt - Black",
    price: 29.99,
    imgUrl: hoodieBlack,
    altTag: "t-shirt-black",
  },
  {
    id: "3",
    title: "Hoodie - White",
    price: 69.99,
    imgUrl: hoodieWhite
  ,
    altTag: "hoodie-white",
  },
  {
    id: "4",
    title: "Hoodie - Black",
    price: 69.99,
    imgUrl: hoodieBlack,
    altTag: "hoodie-black",
  },
  {
    id: "5",
    title: "Hoodie - Camo",
    price: 69.99,
    imgUrl: hoodieCamo,
    altTag: "hoodie-camo",
  },
  {
    id: "6",
    title: "Hoodie - Pink",
    price: 69.99,
    imgUrl: hoodiePink,
    altTag: "hoodie-pink",
  },
  // {
  //   id: "7",
  //   title: "Hat - Black",
  //   price: 37.99,
  //   imgUrl: hatBlackFrontBack,
  //   altTag: "hat",
  // },
  // {
  //   id: "8",
  //   title: "Dad Hat - Black",
  //   price: 37.99,
  //   imgUrl: hatBlackDadFrontBack,
  //   altTag: "hat",
  // },
  {
    id: "9",
    title: "Sticker",
    price: 5.99,
    imgUrl: sticker01,
    altTag: "sticker",
  },
  {
    id: "10",
    title: "Sticker",
    price: 5.99,
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
