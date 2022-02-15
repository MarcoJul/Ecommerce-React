import { useState } from "react";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>Your Cart</h2>
      {!isEmpty && <p className={classes.empty}>Your Cart is empty.</p>}
      {!isEmpty && <CartItem />}
      <CartTotal />
    </div>
  );
};

export default Cart;
