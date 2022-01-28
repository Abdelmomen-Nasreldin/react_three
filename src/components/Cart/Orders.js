import React from "react";
import classes from "./Orders.module.scss"

const Orders = (props) => {
  return (
    <div className={`${classes.orders} d-flex justify-content-between align-items-center`}>
      <div className={`${classes.orders__left}`}>
        <p>{props.name}</p>
        <div className="">
          <span>{props.price}$</span>
          <span>x{props.amount}</span>
        </div>
      </div>
      <div className={`${classes.orders__right}`}>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={props.onClickDecrement}
        >
          -
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={props.onClickIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Orders;
