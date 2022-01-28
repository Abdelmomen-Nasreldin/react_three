import React from "react";
import classes from "./DummyText.module.css"
import CartUI from "./../UI/CartUI";

const DummyText = () => {
  return (
    <CartUI className={`${classes.DummyText} d-flex flex-column justify-content-center align-items-center`}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </CartUI>
  );
};

export default DummyText;
