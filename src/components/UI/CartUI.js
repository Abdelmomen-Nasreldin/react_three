import React from "react";
import classes from "./CartUI.module.css"

const CartUI = (props) => {
  return <div className={`${classes.cart} ${props.className}`}>{props.children}</div>;
};

export default CartUI;
