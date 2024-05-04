import { CartContext, ICartContext } from "@/app/providers/cart";
import { Button, Divider } from "@mui/material";
import { useContext } from "react";
import CartItem from "./CartItem";
import { ShoppingCart } from "@mui/icons-material";

const Cart = () => {
  const { products, subtotal } = useContext<ICartContext>(CartContext);

  return (
    <div className="flex h-full flex-col gap-4 px-2 py-4">
      <div className="mt-4 flex h-full flex-col overflow-hidden">
        <div className="item flex h-full flex-col justify-center gap-4">
          <div className=" mx-auto w-56 rounded-lg border-2 border-primary p-1 text-center">
            <h2 className="text-xl font-bold">
              <ShoppingCart fontSize="large" />
              Meu carrinho
            </h2>
          </div>

          {products.length > 0 ? (
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <p>Você ainda não adicionou nenhum produto ao carrinho</p>
          )}
        </div>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3 px-5 font-bold">
          <Divider />

          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <Divider />

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Divider />

          <Button className="mt-7 font-bold uppercase" variant="contained">
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
function useSession(): { data: any } {
  throw new Error("Function not implemented.");
}
