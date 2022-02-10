import { menuItems } from "../costants/menuItems";
import classes from "./CartItem.module.css";

import { ReactComponent as Chevron } from "../assets/images/chevron.svg";

const CartItem = (props) => {
  return (
    <li className={classes.cartItem}>
      <img src={menuItems[0].img} />
      <div>
        <h2>French Fries with Ketchup</h2>
        <p className={classes.unitPrice}>$3.50</p>
        <div className={classes.action}>
          <button>
            <Chevron />
          </button>
          <p className={classes.quantity}>2</p>
          <button>
            <Chevron />
          </button>
          <p className={classes.totalPrice}>$15.64</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
