import { useContext } from "react";
import type { UseCartContextType } from "../context/CartProvider";

import CartContext from "../context/CartProvider";

const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};
export default useCart;
