import Order from '../interfaces/Order.interface';
import connection from '../models/connection';
import OrderModel from '../models/ordersModel';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrder(): Promise<Order[]> {
    const OrderResult = await this.model.getAllOrder();
    return OrderResult;
  }
}
export default OrderService;
