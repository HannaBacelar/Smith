import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAllOrder = async (req: Request, res: Response) => {
    const OrderResult = await this.orderService.getAllOrder();
    res.status(StatusCodes.OK).json(OrderResult);
  };
}
export default OrderController;
