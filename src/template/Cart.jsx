import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartData from "./CartProductData";

export default function Cart() {
  const productPriceSum = useSelector((state) => state.totalPrice);
  console.log(productPriceSum);
  if (productPriceSum) {
    return <CartData />;
  } else {
    return <EmptyCart />;
  }
}
