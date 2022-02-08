import MenuItem from "./MenuItem";

import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>To Go Menu</h2>
      <ul>
        <MenuItem menuItems={props.items} />
      </ul>
    </div>
  );
};

export default Menu;
