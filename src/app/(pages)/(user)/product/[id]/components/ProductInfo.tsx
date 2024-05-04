"use client";

import { IProducts } from "@/app/interfaces/product";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { CartContext, ICartProduct } from "@/app/providers/cart";

const ProductInfo = ({ product }: { product: ICartProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };
  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.title}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </h1>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div
          onClick={handleDecreaseQuantityClick}
          className="hover:cursor-pointer"
        >
          <ArrowCircleLeftIcon fontSize="large" />
        </div>

        <span>{quantity}</span>
        <div
          onClick={handleIncreaseQuantityClick}
          className="hover:cursor-pointer"
        >
          <ArrowCircleRightIcon fontSize="large" />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60 first-letter:uppercase">
          {product.description}
        </p>
      </div>

      <Button
        className="my-8 font-bold uppercase"
        variant="contained"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="bg-accent mb-4 mt-5 flex items-center justify-between rounded-lg px-5 py-2">
        <div className="flex items-center gap-2">
          <LocalShippingIcon fontSize="large" />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-primary">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
