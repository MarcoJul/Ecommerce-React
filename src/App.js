import classes from "./App.module.css";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

import { menuItems } from "./costants/menuItems";

function App() {
  return (
    <div className={classes.container}>
      <Menu items={menuItems} />
      <Cart />
    </div>
  );
}

export default App;
