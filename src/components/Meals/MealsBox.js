import React, { useContext, useRef, useState } from "react";
import CartUI from "./../UI/CartUI";
import classes from "./MealBox.module.css";
import Meal from "./Meal";
import {
  foodDataContext,
  // orderDataContext,  
  setOrderDataContext,
} from "./../../store/food-data";

const MealsBox = () => {
  const foodData = useContext(foodDataContext);
  // const orderData = useContext(orderDataContext);
  const setOrderData = useContext(setOrderDataContext);
  // const noOfOrders = useContext(noOfOrdersContext);
 const [amountOfOders, setAmountOfOders] =useState(1) // erorr ///////////////////////////////erooooooooooooooooore/////////
// const amountOfOders = useRef(1)
  const orderHandler = (food) => {
    
    // need some logic edit
    setOrderData((prevState) => {
      const index = prevState.findIndex((order) =>{
        return order.id === food.id;
      })
      if(index>-1){
        const isExist = prevState[index] //.find((order) =>{return order.id === food.id})
        const temp = {...isExist, amount: amountOfOders + isExist.amount}
      
        const prev = [...prevState]
        prev[index] = temp;

        // const prev = prevState.map((order) => {
        //   if (order.id === food.id) {
        //     return{...order, amount: amountOfOders + order.amount}
        //   }else{
        //     return order
        //   }
        // })
        
        return prev
      }else{
        return [...prevState, food]
      }
    });
    
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
                amount={(e) => {                          
                  setAmountOfOders(+e.target.value)
                  console.log(amountOfOders, e.target.value)
                }}
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
