import React from "react";
import "../style/DisplayCartData.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
export default function CartDisplay({
  index,
  cartDisplayName,
  cartDisplayPrice,
}) {
  const newState = useSelector((state) => state.changeState);

  const totalPrice = useSelector((state) => state.totalPrice);
  const cartPdtName = useSelector((state) => state.cartPdtName);

  const dispatch = useDispatch();
  const { updateProductState } = bindActionCreators(actionCreators, dispatch);
  function deleteProduct(index) {
    let local = [...cartPdtName];
    local.splice(index, 1);
    updateProductState(local);
  }
  return (
    <div>
      <div className="cartArray-mega-container">
        <div className="cartArray-index">{index + 1}</div>
        <div className="cartArray-productName">{cartDisplayName}</div>
        <div className="cartArray-productPrice">{cartDisplayPrice}</div>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => deleteProduct(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
