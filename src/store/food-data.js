import React, { useState } from "react";

export const foodDataContext = React.createContext();
export const setFoodDataContext = React.createContext();
export const orderDataContext = React.createContext();
export const setOrderDataContext = React.createContext();
export const noOfOrdersContext = React.createContext();
export const setNoOfOrdersContext = React.createContext();

const foodDataDummy = [
  {
    id: Math.random().toString(),
    name: "meal1",
    price: 12,
    des: "eat eat zzz",
    amount: 1,
  },
  {
    id: Math.random().toString(),
    name: "meal2",
    price: 20,
    des: "eat eat qqq",
    amount: 1,
  },
  {
    id: Math.random().toString(),
    name: "meal3",
    price: 25,
    des: "eat eat rrr",
    amount: 1,
  },
];
const FoodProvider = (props) => {
  const [foodData, setFoodData] = useState(foodDataDummy);
  const [orderData, setOrderData] = useState([])
  const [noOfOrders, setNoOfOrders] = useState(0) //COULD be easily the length of the orderData array mr. stupid 
  return (
    <foodDataContext.Provider value={foodData}>
      <setFoodDataContext.Provider value={setFoodData}>
      <orderDataContext.Provider value={orderData}>
      <setOrderDataContext.Provider value={setOrderData}>
      <noOfOrdersContext.Provider value={noOfOrders}>
      <setNoOfOrdersContext.Provider value={setNoOfOrders}>
        {props.children}
      </setNoOfOrdersContext.Provider>
      </noOfOrdersContext.Provider>
      </setOrderDataContext.Provider>
      </orderDataContext.Provider>
      </setFoodDataContext.Provider>
    </foodDataContext.Provider>
  );
};
export default FoodProvider;
