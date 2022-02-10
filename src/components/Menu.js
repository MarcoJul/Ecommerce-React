import MenuItem from "./MenuItem";

import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>To Go Menu</h2>
      <ul>
        {props.items.map((item) => (
          <MenuItem
            menuItems={props.items}
            id={item.id}
            img={item.img}
            key={item.id}
            bgColor={item.bgColor}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
