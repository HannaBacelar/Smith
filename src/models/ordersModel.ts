import { Pool } from 'mysql2/promise';
import Order from '../interfaces/Order.interface';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAllOrder(): Promise<Order[]> {
    const OrderResult = await this.connection.execute(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds FROM Trybesmith.Orders AS O
    INNER JOIN  Trybesmith.Products AS P 
    ON O.id = P.orderId 
    GROUP BY O.id
    ORDER BY O.userId;`,
    );
    const [result] = OrderResult;
    return result as Order[];
  }
}

// https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg--- referencia do JSON_ARRAYAGG