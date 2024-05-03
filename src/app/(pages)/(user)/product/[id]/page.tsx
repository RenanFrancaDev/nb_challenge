import { ProductService } from "@/app/api/products";
import Image from "next/image";
import ProductInfo from "./components/ProductInfo";
import ProductList from "@/app/components/ProductList";

interface ProductDetailsPageProps {
  params: {
    id: number;
  };
}

const ProductDetailPage = async ({
  params: { id },
}: ProductDetailsPageProps) => {
  const product = (await ProductService.getProduct(id)).data;

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="mx-auto flex min-w-[360px] max-w-[760px] flex-col gap-4">
        <div className="bg-accent flex h-[380px] w-full items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            height={0}
            width={0}
            sizes="100vw"
            className="h-full w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <ProductInfo product={product} />
      </div>
      <div className="py-8">
        <h2 className="px-5 pb-6 font-bold">
          Confira mais produtos da categoria {product.category}:
        </h2>
        <ProductList category={product.category} />
      </div>
    </section>
  );
};

export default ProductDetailPage;
