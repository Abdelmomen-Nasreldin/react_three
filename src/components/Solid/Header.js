import React, { useState } from "react";
import classes from "./Header.module.css";
import CartHeader from "./../Cart/CartHeader";
import Cart from "../Cart/Cart";


const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={`${classes.main__header}`}>
      <div className={`${classes.header} container`}>
        <h1>React Meals</h1>
        <div onClick={() => setVisible(true)} >
          <CartHeader />
        </div>
      </div>

      <Cart visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Header;
