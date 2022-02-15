import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./CartTotal.module.css";

const CartTotal = () => {
  const subTotal = useSelector((state) => state.subTotal);
  const taxes = useSelector((state) => state.taxes);
  const totalCart = useSelector((state) => state.totalCart);

  return (
    <Fragment>
      <div className={classes.box}>
        <div className={classes.row}>
          <h3>Subtotal:</h3>
          <p className={classes.price}>${subTotal}</p>
        </div>
        <div className={classes.row}>
          <h3>Tax:</h3>
          <p className={classes.taxes}>${taxes}</p>
        </div>
        <div className={classes.row}>
          <h3>Total:</h3>
          <p className={classes.total}>${totalCart}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotal;
