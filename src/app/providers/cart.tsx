"use client";

import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { IProducts } from "../interfaces/product";

export interface CartProduct extends IProducts {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartPrice: number;
  subtotal: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductToCart: (productId: string) => void;
  increaseProductToCart: (productId: string) => void;
  deleteProductToCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartPrice: 0,
  subtotal: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductToCart: () => {},
  increaseProductToCart: () => {},
  deleteProductToCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const item = JSON.parse(
      localStorage.getItem("@fire-store/cart-products") || "[]",
    );
    // console.log(item)
    setProducts(item);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      // console.log("debug"+products)
      localStorage.setItem(
        "@fire-store/cart-products",
        JSON.stringify(products),
      );
    }
  }, [products]);

  // Total without discount
  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity;
    }, 0);
  }, [products]);

  const totalDiscount = subtotal;

  const addProductToCart = (product: CartProduct) => {
    // if product already contains in the cart
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        }),
      );

      return;
    }
    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductToCart = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const increaseProductToCart = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        return cartProduct;
      }),
    );
  };

  const deleteProductToCart = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductToCart,
        increaseProductToCart,
        deleteProductToCart,
        subtotal,
        totalDiscount,
        cartTotalPrice: 0,
        cartPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
