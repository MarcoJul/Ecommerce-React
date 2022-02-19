// import { useEffect, useState } from "react";

import classes from "./App.module.css";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

import { menuItems } from "./costants/menuItems";

function App() {
  // const [menuItems, setMenuItems] = useState([]);
  // useEffect(() => {
  //   const fetchingData = async () => {
  //     const response = await fetch(
  //       "https://e-commerce-react-39b64-default-rtdb.firebaseio.com/menuItems.json"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setMenuItems(data);
  //   };
  //   fetchingData();
  // }, []);

  return (
    <div className={classes.container}>
      <Menu items={menuItems} />
      <Cart />
    </div>
  );
}

export default App;
