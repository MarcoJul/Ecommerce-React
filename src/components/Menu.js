import MenuItem from "./MenuItem";

import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>To Go Menu</h2>
      <ul>
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
