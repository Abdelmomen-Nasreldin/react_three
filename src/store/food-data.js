import React, { useState } from "react";

export const foodDataContext = React.createContext();
// export const setFoodDataContext = React.createContext();
export const orderDataContext = React.createContext();
export const setOrderDataContext = React.createContext();
// export const noOfOrdersContext = React.createContext();
// export const setNoOfOrdersContext = React.createContext();

const foodDataDummy = [
  {
    id: Math.random().toString(),
    name: "meal1",
    price: 12,
    description: "eat eat zzz",
  },
  {
    id: Math.random().toString(),
    name: "meal2",
    price: 20,
    description: "eat eat qqq",
  },
  {
    id: Math.random().toString(),
    name: "meal3",
    price: 25,
    description: "eat eat rrr",
  },
];
const FoodProvider = (props) => {
  const [foodData,] = useState(foodDataDummy);
  const [orderData, setOrderData] = useState([])

  return (
    <foodDataContext.Provider value={foodData}>
      <orderDataContext.Provider value={orderData}>
      <setOrderDataContext.Provider value={setOrderData}>
        {props.children}  
      </setOrderDataContext.Provider>
      </orderDataContext.Provider>
    </foodDataContext.Provider>
  );
};
export default FoodProvider;
