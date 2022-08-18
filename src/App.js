import { useContext } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/CartContext";
import CartModal from "./components/Cart/Cart";

function App() {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <Header />
      {cartCtx.isCartOpen && <CartModal />}
      <Meals />
    </>
  );
}

export default App;
