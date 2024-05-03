import { ProductService } from "@/app/api/products";
import axios from "axios";

const Categories = async () => {
  const { data }: { data: String[] } =
    await ProductService.getProductsByCategories();

  return (
    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 px-5">
      {data.map((category, index) => (
        <div
          className="flex items-center justify-center gap-3 rounded-lg border-2 border-white py-3 capitalize hover:cursor-pointer hover:bg-primary "
          key={index}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
