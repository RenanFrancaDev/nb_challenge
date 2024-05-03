import { ProductService } from "../api/products";
import { IProducts } from "../interfaces/product";
import ProductItem from "./ProductItem";

const ProductList = async ({ category }: { category: string }) => {
  const products: IProducts[] = (
    await ProductService.getProductByCategory(category)
  ).data;
  console.log(products);

  return (
    <section className="mb-8 flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((item, index) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </section>
  );
};

export default ProductList;
