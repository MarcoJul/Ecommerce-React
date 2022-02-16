import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import classes from "./CartTotal.module.css";

const CartTotal = () => {
  const dispatch = useDispatch();
  const subTotal = useSelector((state) => state.subTotal);
  const taxes = useSelector((state) => state.taxes);
  const totalCart = useSelector((state) => state.totalCart);

  const incrementTotal = () => {
    dispatch(cartAction.increment());
  };

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
          <button onClick={incrementTotal}>Increment</button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotal;
