import useCart from "../hooks/useCart";

type ProductType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: ProductType) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p> Shooping Cart &copy; :{year} </p>
  ) : (
    <>
      <p>Total Items:{totalItems}</p>
      <p>Total price:{totalPrice}</p>
      <p>Shooping Cart &copy; :{year}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
};

export default Footer;
