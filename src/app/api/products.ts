import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
const PATH = "products";

export class ProductService {
  static getProducts() {
    return axios.get(`${BASE_URL}/${PATH}`);
  }
  static getProductsByCategories() {
    return axios.get(`${BASE_URL}/${PATH}/categories/`);
  }
  static getProduct(id: number) {
    return axios.get(`${BASE_URL}/${PATH}/${id}`);
  }
}
