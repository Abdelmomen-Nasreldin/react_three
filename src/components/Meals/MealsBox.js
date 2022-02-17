import React, { useContext } from "react";
import CartUI from "./../UI/CartUI";
import classes from "./MealBox.module.css";
import Meal from "./Meal";
import {
  foodDataContext,
  orderDataContext,
  setOrderDataContext,
} from "./../../store/food-data";

const MealsBox = () => {
  const foodData = useContext(foodDataContext);
  const orderData = useContext(orderDataContext);
  const setOrderData = useContext(setOrderDataContext);

  const orderHandler = (order) => {
    console.log(order)
    const ordersNames = [...new Set(orderData.map((item) => item.name))];
    const isOrderFound = ordersNames.find((name) => name === order.name); // first time = undefined
    if (isOrderFound) {
      const orderIndex = orderData.findIndex(
        (item) => item.name === isOrderFound
      );

      let newOrdeData = [...orderData];
      const orderBeforeUpdate = newOrdeData.find(
        (item) => item.name === order.name
      );
      const updateOrder = {
        ...order,
        amount: orderBeforeUpdate.amount + order.amount,
        price: orderBeforeUpdate.price + order.price 
      };
      newOrdeData[orderIndex] = updateOrder;
      setOrderData(newOrdeData);
    } else {
      setOrderData((preOrders) => [...preOrders, order]);
    }
  };

 
  return (
    <CartUI className={`${classes.mealsBox}`}>
      <ul className={`list-group list-group-flush`}>
        {foodData.map((food) => {
          return (
            <li key={food.id} className={`list-group-item`}>
              <Meal
                name={food.name}
                description={food.description}
                price={food.price}
                addOrder={orderHandler}
              />
            </li>
          );
        })}
      </ul>
    </CartUI>
  );
};

export default MealsBox;
