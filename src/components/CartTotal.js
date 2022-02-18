import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./CartTotal.module.css";

const CartTotal = () => {
  const subTotal = useSelector((state) => state.cart.totalAmount);

  const totalTaxes = +(subTotal * 0.04).toFixed(2);

  return (
    <Fragment>
      <div className={classes.box}>
        <div className={classes.row}>
          <h3>Subtotal:</h3>
          <p className={classes.price}>${subTotal}</p>
        </div>
        <div className={classes.row}>
          <h3>Tax:</h3>
          <p className={classes.taxes}>${+totalTaxes}</p>
        </div>
        <div className={classes.row}>
          <h3>Total:</h3>
          <p className={classes.total}>${+subTotal + +totalTaxes}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotal;
