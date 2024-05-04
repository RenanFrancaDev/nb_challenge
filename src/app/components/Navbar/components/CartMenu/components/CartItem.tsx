import Image from "next/image";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { CartContext, ICartProduct } from "@/app/providers/cart";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ product }: { product: ICartProduct }) => {
  const { decreaseProductToCart, increaseProductToCart, deleteProductToCart } =
    useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductToCart(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductToCart(product.id);
  };

  const handleDeleteProductClick = () => {
    deleteProductToCart(product.id);
  };
  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="flex items-center gap-4">
        {/* PARTE DIREITA (FOTO E NOME) */}

        <div className="flex h-[100px] w-[77px] items-center justify-center rounded-lg bg-foreground">
          <Image
            src={product.image}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.title}
            className="h-auto w-32 "
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.title}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">R$ {product.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center gap-1">
            <div onClick={handleDecreaseProductQuantityClick}>
              <ArrowCircleLeftIcon fontSize="medium" />
            </div>

            <span className="text-xs">{product.quantity}</span>

            <div onClick={handleIncreaseProductQuantityClick}>
              <ArrowCircleRightIcon fontSize="medium" />
            </div>
            <div className="">
              <DeleteIcon
                onClick={handleDeleteProductClick}
                fontSize="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
