import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

import classes from "./Menu.module.css";
import { useEffect, useState } from "react";

const Menu = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isAdded, setIsAdded] = useState(false);

  // BUMPING MANAGING STATE

  useEffect(() => {
    if (totalQuantity === 0) {
      return;
    }
    setIsAdded(true);
    const timer = setTimeout(() => {
      setIsAdded(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalQuantity]);

  return (
    <div className={classes.box}>
      <div className={classes.header}>
        <h2 className={classes.title}>To Go Menu</h2>
        <div className={`${classes.flexCart}  ${isAdded ? classes.bump : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.cartIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          {totalQuantity !== 0 && (
            <p className={classes.cartNumber}>{totalQuantity}</p>
          )}
        </div>
      </div>
      <ul className={classes.menuBox}>
        {props.items.map((item) => (
          <MenuItem
            id={item.id}
            img={item.img}
            key={item.id}
            bgColor={item.bgColor}
            title={item.title}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
