import Link from "next/link";
import Image from "next/image";
import { IProducts } from "../interfaces/product";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ProductItem = ({ product }: { product: IProducts }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex h-[320px] w-[200px] flex-col gap-2 rounded-md border hover:cursor-pointer">
        <div className="flex h-[180px] w-full items-center justify-center bg-white">
          <Image
            src={product.image}
            height={100}
            width={100}
            sizes="100vw"
            className="h-full w-full"
            style={{
              objectFit: "contain",
            }}
            alt={product.title}
          />
        </div>

        <div className="flex h-[140px] flex-col justify-between p-1">
          <p className="block overflow-hidden text-ellipsis text-sm">
            {product.title.length > 50
              ? product.title.slice(0, 32) + "..."
              : product.title}
          </p>

          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
            R$ {Number(product.price).toFixed(2).replace(".", ",")}
          </p>
          <div className="flex flex-col">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="read-only"
                precision={0.1}
                value={product.rating.rate}
                readOnly
              />
            </Box>

            <small>{product.rating.count} avaliações</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
