import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <div className={classes.box}>
      <h2 className={classes.title}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className={classes.empty}>Your Cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              img: item.img,
              price: item.price,
              totalPrice: item.totalPrice,
            }}
          />
        ))
      )}
      {cartItems.length !== 0 && <CartTotal />}
    </div>
  );
};

export default Cart;
