import User from '../interfaces/Users.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.Model';

class UsersService {
  public model: UsersModel;
  
  constructor() {
    this.model = new UsersModel(connection);
  }
  
  public async createUsers(user: User):Promise<User> {
    return this.model.create(user);
  }
}
export default UsersService;