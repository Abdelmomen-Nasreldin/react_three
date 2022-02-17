import React, { useRef } from "react";
import classes from "./Meal.module.scss";
import CartUI from "./../UI/CartUI";

const Meal = (props) => {
  const inputValueRef = useRef();
  const FormHandler = (e) => {
    e.preventDefault();
    const order = {
      id: new Date().getUTCMilliseconds().toString(),
      name: props.name,
      price: parseInt(props.price) * parseInt(inputValueRef.current.value),
      description: props.description,
      amount: parseInt(inputValueRef.current.value),
    };
    props.addOrder(order);
  };

  return (
    <CartUI className={`${classes.meal}`}>
      <div className={`${classes.meal__left}`}>
        <h6>{props.name}</h6>
        <p>{props.des}</p>
        <span>{props.price}$</span>
      </div>
      <form onSubmit={FormHandler}>
        <div
          className={`${classes.meal__right} d-flex flex-column justify-content-center align-items-center`}
        >
          <div
            className={`${classes.meal__right__amount} d-flex justify-content-center align-items-center`}
          >
            <span>Amount</span>
            <input
              type="number"
              className="ms-2"
              defaultValue={`1`}
              ref={inputValueRef}
            />
          </div>
          <button type="submit" className={`${classes.meal__right__btn} mt-2`}>
            Add
          </button>
        </div>
      </form>
    </CartUI>
  );
};

export default Meal;
