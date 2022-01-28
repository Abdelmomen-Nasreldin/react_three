import React, { useContext } from "react";
import CartUI from "./../UI/CartUI";
import classes from "./MealBox.module.css";
import Meal from "./Meal";
import {
  foodDataContext,
  noOfOrdersContext,
  orderDataContext,
  setNoOfOrdersContext,
  setOrderDataContext,
} from "./../../store/food-data";

const MealsBox = () => {
  const foodData = useContext(foodDataContext);
  const orderData = useContext(orderDataContext);
  const setOrderData = useContext(setOrderDataContext);
  const noOfOrders = useContext(noOfOrdersContext);
  const setNoOfOrders = useContext(setNoOfOrdersContext);

  const orderHandler = (food) => {
    // need some logic edit
    setOrderData((pre) => [...pre, food]);
    setNoOfOrders(pre=>pre+1)
  };
  return (
    <CartUI className={`${classes.mealsBox}`}>
      <ul className={`list-group list-group-flush`}>
        {foodData.map((food) => {
          return (
            <li key={food.id} className={`list-group-item`}>
              <Meal
                name={food.name}
                des={food.des}
                price={food.price}
                amount={(e) => (food.amount = e.target.value)}
                addOrder={() => orderHandler(food)}
              />
            </li>
          );
        })}
      </ul>
    </CartUI>
  );
};

export default MealsBox;
