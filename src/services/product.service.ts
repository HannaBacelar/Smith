import Product from '../interfaces/Product.interface';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public createProduct(product: Product):Promise<Product> {
    return this.model.create(product);
  }

  public async getAllProduct(): Promise<Product[]> {
    const productsResult = await this.model.getAllProducts();
    return productsResult;
  }
}
export default ProductService;
