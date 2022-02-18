import { menuItems } from "../costants/menuItems";
import classes from "./CartItem.module.css";

import { ReactComponent as Chevron } from "../assets/images/chevron.svg";

const CartItem = (props) => {
  console.log("prop", props);
  return (
    <li className={classes.cartItem}>
      <img src={props.item.img} alt="plate" />
      <div>
        <h2>{props.item.title}</h2>
        <p className={classes.unitPrice}>${props.item.price}</p>
        <div className={classes.action}>
          <button>
            <Chevron />
          </button>
          <p className={classes.quantity}>{props.item.quantity}</p>
          <button>
            <Chevron />
          </button>
          <p className={classes.totalPrice}>{props.item.totalPrice}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
