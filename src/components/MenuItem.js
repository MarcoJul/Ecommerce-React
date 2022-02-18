import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id: props.id,
        title: props.name,
        img: props.img,
        price: props.price,
      })
    );
  };
  return (
    <li className={classes.item} style={{ backgroundColor: props.bgColor }}>
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>${props.price}</p>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </li>
  );
};

export default MenuItem;
