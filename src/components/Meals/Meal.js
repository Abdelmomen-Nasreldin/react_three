import React from "react";
import classes from "./Meal.module.scss";
import CartUI from "./../UI/CartUI";

const Meal = (props) => {
    
  return (
    <CartUI className={`${classes.meal}`}>
      <div className={`${classes.meal__left}`}>
        <h6>{props.name}</h6>
        <p>{props.des}</p>
        <span>{props.price}$</span>
      </div>
      <div className={`${classes.meal__right} d-flex flex-column justify-content-center align-items-center`}>
        <div className={`${classes.meal__right__amount} d-flex justify-content-center align-items-center`}>
          <span>Amount</span>
          <input type="number" className="ms-2" onChange={props.amount}/>
        </div>
        <button className={`${classes.meal__right__btn} mt-2`} onClick={props.addOrder}>Add</button>
      </div>
      {/* <hr /> */}
    </CartUI>
  );
};

export default Meal;
