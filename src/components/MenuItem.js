import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li className={classes.item} style={{ backgroundColor: props.bgColor }}>
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>${props.price}</p>
        <button>Add to Cart</button>
      </div>
    </li>
  );
};

export default MenuItem;
