import Navbar from "@/app/components/Navbar";
import PromoBanner from "./components/promo-banner";
import Categories from "./components/categories";
import axios from "axios";
import { IProducts } from "@/app/interfaces/product";

const Home = async () => {
  const { data }: { data: IProducts[] } = await axios.get(
    "https://fakestoreapi.com/products",
  );

  console.log(data);

  return (
    <section>
      <PromoBanner
        src="/banner_home/banner_home01.svg"
        alt="around 10% of discount"
      />
      <Categories />
      {data.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </section>
  );
};

export default Home;
