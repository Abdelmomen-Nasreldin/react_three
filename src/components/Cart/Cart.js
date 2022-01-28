import React, { useContext } from "react";
import { Modal } from "antd";
import { orderDataContext } from "../../store/food-data";
import Orders from './Orders';
const Cart = ({ visible, setVisible }) => {
  const orderData = useContext(orderDataContext);
  return (
    <>
      <Modal
        title="orders"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <ul  className={`list-group list-group-flush`}>
          {orderData.map((order) => {
            return <li key={order.id} className={`list-group-item`}>
                <Orders name={order.name} price={order.price} amount={order.amount} />
            </li>;
          })}
        </ul>
      </Modal>
    </>
  );
};

export default Cart;
