import React from "react";

const Orders = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="">
        <p>{props.name}</p>
        <div className="">
          <span>{props.price}</span>
          <span>x {props.amount}</span>
        </div>
      </div>
      <div className="">
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={props.onClick}
        >
          -
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={props.onClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Orders;
