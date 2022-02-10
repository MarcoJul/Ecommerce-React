import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>Your Cart</h2>
      <p className={classes.empty}>Your Cart is empty.</p>
      <CartItem />
      <CartTotal />
    </div>
  );
};

export default Cart;
