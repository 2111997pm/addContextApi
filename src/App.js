
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showcartHandler = () => {
    setCartIsShown(true);
  }

  const hidecartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hidecartHandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
