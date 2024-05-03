import { CartContext } from "@/app/providers/cart";
import { Button, Divider } from "@mui/material";
import { useContext } from "react";

const Cart = () => {
  const { products, subtotal } = useContext(CartContext);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="mt-4 flex h-full flex-col overflow-hidden">
        <div className="flex h-full flex-col gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id}>{product.title}</div>

              //   <CartItem key={product.id} product={product} />
            ))
          ) : (
            <p>Você ainda não adicionou nenhum produto ao carrinho</p>
          )}
        </div>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
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
