import type { Dispatch, SetStateAction } from "react";
import Nav from "./Nav";
import useCart from "../hooks/useCart";
type propsType = {
  viewCart: boolean;
  setViewCart: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: propsType) => {
  const { totalItems, totalPrice } = useCart();
  const content = (
    <>
      <header className="header">
        <div className="header__title-bar">
          <h1>Retail Biz</h1>
          <div className="header__title-box">
            <p>Total items : {totalItems}</p>
            <p>Total price : {totalPrice}</p>
          </div>
        </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </header>
    </>
  );
  return content;
};

export default Header;
