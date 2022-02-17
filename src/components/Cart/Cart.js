import React, { useContext } from "react";
import { Modal } from "antd";
import { orderDataContext,setOrderDataContext, foodDataContext } from "../../store/food-data";
import Orders from "./Orders";
const Cart = ({ visible, setVisible }) => {
  const foodData = useContext(foodDataContext)
  const orderData = useContext(orderDataContext);
  const setOrderData = useContext(setOrderDataContext);

  const incrementOrderAmountHandler = (order) => {
    console.log(orderData)
    const orderIndex = orderData.findIndex((item) => item.id === order.id)
    console.log(orderIndex)
    const foodOrder = foodData.find((item) => item.name === order.name)
    const priceForOneOrder = foodOrder.price
    
    const updateOrder = {...order, amount: order.amount+1, price: order.price+priceForOneOrder}
    console.log(updateOrder)
    let newOrdeData = [...orderData]
    newOrdeData[orderIndex] = updateOrder
    setOrderData(newOrdeData)
  };




  const decrementOrderAmountHandler = (order) => {
    const orderIndex = orderData.findIndex((item) => item.id === order.id)
    const foodOrder = foodData.find((item) => item.name === order.name)
    const priceForOneOrder = foodOrder.price
    const updateOrder = {...order, amount: order.amount-1, price: order.price-priceForOneOrder}
    let newOrdeData = [...orderData]
    newOrdeData[orderIndex] = updateOrder
    setOrderData(newOrdeData)
  };
 
  return (
    <>
      <Modal
        title="orders"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <ul className={`list-group list-group-flush`}>
          {orderData.length>0 && orderData.map((order) => {
            return (
              <li key={order.id} className={`list-group-item`}>
                <Orders
                  name={order.name}
                  price={order.price}
                  amount={order.amount}
                  onClickIncrement={() => incrementOrderAmountHandler(order)}
                  onClickDecrement={() => decrementOrderAmountHandler(order)}
                />
              </li>
            );
          })}
          {orderData.length===0 && "NO Orders"}
        </ul>
      </Modal>
    </>
  );
};

export default Cart;
