import React, { useContext, useEffect } from "react";
import { Modal } from "antd";
import { orderDataContext, setOrderDataContext } from "../../store/food-data";
import Orders from "./Orders";
const Cart = ({ visible, setVisible }) => {
  const orderData = useContext(orderDataContext);
  const setOrderData = useContext(setOrderDataContext);

  const incrementOrderAmountHandler = (order) => {
    setOrderData((pre) => {
      const prevState = pre.map((meal) => {
        if (meal.id === order.id) {
          return { ...meal, amount: +meal.amount + 1, price: order.price*order.amount };
        } else {
          return meal;
        }
      });
      return prevState;
    }); 
  };
  const decrementOrderAmountHandler = (order) => {
    setOrderData((pre) => {
      const prevState = pre.map((meal) => {
        if (meal.id === order.id) {
          return { ...meal, amount: +meal.amount - 1, price: meal.price*meal.amount };
        } else {
          return meal;
        }
      });
      return prevState;
    }); 
  };
  useEffect(() => {
    // incrementOrderAmountHandler()
  }, []);
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
          {orderData.map((order) => {
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
        </ul>
      </Modal>
    </>
  );
};

export default Cart;
