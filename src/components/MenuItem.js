import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  console.log(props.menuItems[0].img);
  return (
    <li className={classes.item}>
      <img src={props.menuItems[0].img} />
      <h2>{props.menuItems[0].name}</h2>
      <p>{props.menuItems[0].price}</p>
      <button>Add to Cart</button>
    </li>
  );
};

export default MenuItem;
