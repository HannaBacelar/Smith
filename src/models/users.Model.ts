import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/Users.interface';

export default class UsersModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password ) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return user;
  }
}