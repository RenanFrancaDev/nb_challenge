import Navbar from "@/app/components/Navbar";
import PromoBanner from "./components/promo-banner";
import Categories from "./components/categories";
import axios from "axios";
import { IProducts } from "@/app/interfaces/product";
import ProductItem from "@/app/components/ProductItem";

const Home = async () => {
  const { data }: { data: IProducts[] } = await axios.get(
    "https://fakestoreapi.com/products",
  );

  return (
    <section>
      <PromoBanner
        src="/banner_home/banner_home01.svg"
        alt="around 10% of discount"
      />
      <Categories />
      <div className="flex flex-row gap-4 pb-6 pt-6">
        {data.map((item, index) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Home;
