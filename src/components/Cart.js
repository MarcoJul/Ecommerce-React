import { useEffect } from "react";

import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch(
      "https://e-commerce-react-39b64-default-rtdb.firebaseio.com/cart.json",
      { method: "PUT", body: JSON.stringify(cartItems) }
    );
  }, [cartItems]);

  return (
    <div className={classes.box}>
      <h2 className={classes.title}>Your Cart</h2>
      <ul className={classes.itemBox}>
        {cartItems.length === 0 ? (
          <p className={classes.empty}>Your Cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              totalPrice={item.totalPrice}
              quantity={item.quantity}
            />
          ))
        )}
        {cartItems.length !== 0 && <CartTotal />}
      </ul>
    </div>
  );
};

export default Cart;
