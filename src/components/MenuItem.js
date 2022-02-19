import { useState } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import classes from "./MenuItem.module.css";

const MenuItem = ({ id, title, img, price, bgColor }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  let quantity = 0;
  if (isClicked) {
    const object = items.find((item) => item.id === id);
    if (object) {
      quantity = object.quantity;
    } else {
      quantity = 0;
      setIsClicked(false);
    }
  }

  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        img,
        price,
        quantity: 1,
      })
    );
    setIsClicked(true);
  };

  const removeFromCartHandler = () => {
    dispatch(cartAction.removeItemToCart(id));
  };

  return (
    <li className={classes.item} style={{ backgroundColor: bgColor }}>
      <div>
        <img src={img} alt={title} />
      </div>
      <div className={classes.info}>
        <h2>{title}</h2>
        <p>${price.toFixed(2)}</p>
        {!isClicked ? (
          <button className={classes.addToCart} onClick={addToCartHandler}>
            Add to Cart
          </button>
        ) : (
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
          </div>
        )}
      </div>
    </li>
  );
};

export default MenuItem;
