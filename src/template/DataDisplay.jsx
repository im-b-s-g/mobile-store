import React from "react";
import "../style/DataDisplay.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useNavigate } from "react-router-dom";

export default function DataDisplay({
  photo,
  modalPhoto,
  setModalPhoto,
  amount,
  pdtName,
  index,
  data,
  modalName,
  setModalName,
  price,
  setPrice,
  quantity,
  setQuantity,
  baseAmount,
  setBaseAmount,
}) {
  const navigate = useNavigate();
  function MoveToCart() {
    navigate("/Cart");
  }
  function MoveToHomePage() {
    navigate("");
  }
  const dispatch = useDispatch();
  const { increasePrice, decreasePrice, productName } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function AddDataCart() {
    let temp = {
      name: pdtName,
      pdtPrice: amount,
    };
    productName(temp);
  }

  //baseamount is the price of current selected product and totalPrice is the price of totl amount
  return (
    <div className="card-parent">
      <div className="prouct-card-parent">
        <img src={photo} className="product-image" alt="product card logo" />
        <div className="product-card-info">
          <div className="product-card-name">Name: {pdtName}</div>

          <div className="product-card-price">Price: ${amount}</div>
        </div>

        <button
          className="cart-add-button btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setModalName(pdtName);
            setPrice(amount);
            setBaseAmount(amount);
            setModalPhoto(photo);
            increasePrice(amount);
            AddDataCart();
          }}
        >
          Add to cart
        </button>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="modal-heading">
                  Item Added To The Cart
                </h1>
                <button
                  type="button"
                  class="btn-close modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <center>
                <img
                  src={modalPhoto}
                  className="modal-image"
                  alt="product card logo"
                />
                <hr />
                <div className="modal-product-name">Name: {modalName}</div>
                <hr />

                <div className="modal-product-price">Price : ${baseAmount}</div>
              </center>

              <button
                className="btn btn-outline-warning"
                onClick={() => {
                  MoveToCart();
                }}
              >
                Go To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
