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

  return (
    <li className={classes.cartItem}>
      <img src={img} alt="plate" />
      <div className={classes.infoBox}>
        <h2>{title}</h2>
        <p className={classes.unitPrice}>${price.toFixed(2)}</p>
        <div className={classes.action}>
          <button onClick={removeFromCartHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 12H6"
              />
            </svg>
          </button>
          <p className={classes.quantity}>{quantity}</p>
          <button onClick={addToCartHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <p className={classes.totalPrice}>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
