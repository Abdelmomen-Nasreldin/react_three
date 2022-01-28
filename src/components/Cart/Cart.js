import React, { useContext, useEffect } from "react";
import { Modal } from "antd";
import { orderDataContext, setOrderDataContext } from "../../store/food-data";
import Orders from "./Orders";
const Cart = ({ visible, setVisible }) => {
  const orderData = useContext(orderDataContext);
  const setOrderData = useContext(setOrderDataContext);

  const incrementOrderAmountHandler = (order) => {
    // setOrderData((pre)=>[...pre,{...order, amount: order.amount+1}])
    
   order.amount+=1
  };
  useEffect(()=>{
    // incrementOrderAmountHandler()
  },[])
  return (
    <>
      {/* incrementOrderAmountHandler */}
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
