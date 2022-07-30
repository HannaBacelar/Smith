import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/Product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
} 

// <ResultSetHeader> é um dos tipos dos quais ajuda a forncer o insert id
// POOL = O pool de promessas garante um número máximo de tarefas processadas simultaneamente. ]
// Cada tarefa no pool de promessas 
// é individual das outras, o que significa que o pool começa a processar a próxima tarefa 
// assim que ela termina. Esse manuseio garante o melhor processamento em lote para suas tarefas.