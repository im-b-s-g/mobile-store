import React, { useState } from "react";
import DataDisplay from "./DataDisplay";
import samsung from "../images/galaxy.jpg";
import productimg from "../images/product.jpg";
import Xiaomi from "../images/Xiaomi.jpg";
import cort from "../images/cort.jpg";
import mi10 from "../images/mi 10.jpg";
import mi11 from "../images/mi 11x.jpg";
import s22 from "../images/samsung s22.jpg";
import s13 from "../images/Samsung S13.jpg";
import "../style/HomePage.css";
import NavBar from "./Navbar";

export default function HomePage() {
  let [modalName, setModalName] = useState("");
  let [modalAmount, setmodalAmount] = useState(0);
  let [price, setPrice] = useState(0);
  let [quantity, setQuantity] = useState(1);
  let [baseAmount, setBaseAmount] = useState(0);
  let [modalPhoto, setModalPhoto] = useState("");
  let [cartPdtName, setCartName] = useState("");
  var productData = [
    {
      image: productimg,
      productName: "Iphone",
      productPrice: 1200,
    },
    {
      image: samsung,
      productName: "Galaxy s22",
      productPrice: 1300,
    },
    {
      image: cort,
      productName: "Samsung M34",
      productPrice: 3300,
    },
    {
      image: mi10,
      productName: "Mi 10",
      productPrice: 300,
    },
    {
      image: Xiaomi,
      productName: "Xiaomi 12 Pro",
      productPrice: 2300,
    },
    {
      image: mi11,
      productName: "Mi 11 X",
      productPrice: 500,
    },
    {
      image: s22,
      productName: "Samsung S22",
      productPrice: 2000,
    },
    {
      image: s13,
      productName: "Samsung S13",
      productPrice: 800,
    },
  ];
  return (
    <>
      <NavBar />
      <div className="product-parent">
        <div className="product-text">Our Products</div>
        <div className="card-arrangement">
          {productData.map(
            (
              x,
              i // x here is the variable and i is the index
            ) => (
              <DataDisplay
                photo={x.image}
                modalPhoto={modalPhoto}
                setModalPhoto={setModalPhoto}
                amount={x.productPrice}
                pdtName={x.productName}
                index={i}
                data={x}
                modalName={modalName}
                setModalName={setModalName}
                price={price} // price for the total amount after adding all the product
                setPrice={setPrice}
                quantity={quantity}
                setQuantity={setQuantity}
                baseAmount={baseAmount}
                setBaseAmount={setBaseAmount}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
