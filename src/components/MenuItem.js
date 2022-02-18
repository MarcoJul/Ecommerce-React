import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import classes from "./MenuItem.module.css";

const MenuItem = ({ id, title, img, price, bgColor }) => {
  const dispatch = useDispatch();

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
  };
  return (
    <li className={classes.item} style={{ backgroundColor: bgColor }}>
      <div>
        <img src={img} alt={title} />
      </div>
      <div className={classes.info}>
        <h2>{title}</h2>
        <p>${price.toFixed(2)}</p>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </li>
  );
};

export default MenuItem;
