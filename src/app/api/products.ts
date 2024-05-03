import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
const PATH = "products";

export class ProductService {
  static getProducts() {
    return axios.get(`${BASE_URL}/${PATH}`);
  }
  static getCategories() {
    return axios.get(`${BASE_URL}/${PATH}/categories/`);
  }
  static getProductByCategory(category: string) {
    return axios.get(`${BASE_URL}/${PATH}/category/${category}`);
  }
  static getProduct(id: number) {
    return axios.get(`${BASE_URL}/${PATH}/${id}`);
  }
}
