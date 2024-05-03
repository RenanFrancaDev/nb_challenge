import Navbar from "@/app/components/Navbar";
import PromoBanner from "./components/promo-banner";

const Home = () => {
  return (
    <section>
      <PromoBanner
        src="/banner_home/banner_home01.svg"
        alt="around 10% of discount"
      />
    </section>
  );
};

export default Home;
