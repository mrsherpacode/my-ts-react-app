import { createContext, useState, type ReactNode } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type useContextProductType = { products: ProductType[] };
const initContextType: useContextProductType = { products: [] };
const productContext = createContext<useContextProductType>(initContextType);

type childrenType = { children?: ReactNode };

export const ProductProvider = ({ children }: childrenType) => {
  const [products] = useState<ProductType[]>(initState);

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("/data/products.json")
  //       .then((res) => res.json() as Promise<{ products: ProductType[] }>)
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message);
  //         return { products: [] as ProductType[] };
  //       })
  //     return data.products;
  //   };

  //   fetchProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  // }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

export default productContext;
