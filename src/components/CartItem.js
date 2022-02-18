import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import classes from "./CartItem.module.css";

import { ReactComponent as Chevron } from "../assets/images/chevron.svg";

const CartItem = ({ id, title, img, price, totalPrice, quantity }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        img,
        price,
        quantity,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(cartAction.removeItemToCart(id));
  };

  console.log(quantity);
  return (
    <li className={classes.cartItem}>
      <img src={img} alt="plate" />
      <div className={classes.infoBox}>
        <h2>{title}</h2>
        <p className={classes.unitPrice}>${price}</p>
        <div className={classes.action}>
          <button onClick={removeFromCartHandler}>
            <Chevron />
          </button>
          <p className={classes.quantity}>{quantity}</p>
          <button onClick={addToCartHandler}>
            <Chevron />
          </button>
          <p className={classes.totalPrice}>{totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
