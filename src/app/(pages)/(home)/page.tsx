import Navbar from "@/app/components/Navbar";
import PromoBanner from "./components/promo-banner";
import Categories from "./components/categories";
import axios from "axios";
import { IProducts } from "@/app/interfaces/product";
import ProductItem from "@/app/components/ProductItem";
import { ProductService } from "@/app/api/products";

const Home = async () => {
  const { data }: { data: IProducts[] } = await ProductService.getProducts();

  return (
    <section className="my-5 flex h-auto flex-col justify-center px-5">
      <PromoBanner
        src="/banner_home/banner_home01.svg"
        alt="around 10% of discount"
      />
      <Categories />
      <div className="flex flex-wrap  gap-5 p-6">
        {data.map((item, index) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Home;
