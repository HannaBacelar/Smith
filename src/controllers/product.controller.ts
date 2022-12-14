import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public createProduct = async (req: Request, res:Response) => {
    const product = req.body;

    const productCreated = await this.productService.createProduct(product);
    res.status(StatusCodes.CREATED).json(productCreated);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const productsResult = await this.productService.getAllProduct();
    res.status(StatusCodes.OK).json(productsResult);
  };
}
export default ProductController;
