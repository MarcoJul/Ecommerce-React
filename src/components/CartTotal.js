import { Fragment } from "react";
import classes from "./CartTotal.module.css";

const CartTotal = () => {
  return (
    <Fragment>
      <div className={classes.box}>
        <div className={classes.row}>
          <h3>Subtotal:</h3>
          <p className={classes.price}>$20.10</p>
        </div>
        <div className={classes.row}>
          <h3>Tax:</h3>
          <p className={classes.taxes}>$1.96</p>
        </div>
        <div className={classes.row}>
          <h3>Total:</h3>
          <p className={classes.total}>$30.12</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotal;
