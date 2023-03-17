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
<<<<<<< HEAD
    price: 69.99,
    imgUrl: hoodieWhite
  ,
=======
    price: 49.99,
    imgUrl: hoodieWhite01,
>>>>>>> parent of 77ea4c1 (asset updates / footer updates)
    altTag: "hoodie-white",
  },
  {
    id: "4",
    title: "Hoodie - Black",
<<<<<<< HEAD
    price: 69.99,
    imgUrl: hoodieBlack,
=======
    price: 49.99,
    imgUrl: hoodieBlack01,
>>>>>>> parent of 77ea4c1 (asset updates / footer updates)
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
  {
    id: "7",
<<<<<<< HEAD
    title: "Hat - Black",
    price: 37.99,
    imgUrl: hatBlackFrontBack,
=======
    title: "Hat",
    price: 34.99,
    imgUrl: hat01,
>>>>>>> parent of 77ea4c1 (asset updates / footer updates)
    altTag: "hat",
  },
  {
    id: "8",
<<<<<<< HEAD
    title: "Dad Hat - Black",
    price: 37.99,
    imgUrl: hatBlackDadFrontBack,
=======
    title: "Hat",
    price: 34.99,
    imgUrl: hat02,
>>>>>>> parent of 77ea4c1 (asset updates / footer updates)
    altTag: "hat",
  },
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
