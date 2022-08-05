import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT, { SignOptions } from 'jsonwebtoken'; //
import UsersService from '../services/users.service';

const secretJWT = process.env.JWT_SECRET || 'Smith123' as string;

class UsersController {
  constructor(private usersService = new UsersService()) {}
  
  public usersCreated = async (req: Request, res:Response) => {
    const users = req.body;
  
    const usersCreated = await this.usersService.createUsers(users);

    const config:SignOptions = {
      expiresIn: '15d',
      algorithm: 'HS256',
    };

    const token = JWT.sign({ user: usersCreated }, secretJWT, config);
    return res.status(StatusCodes.CREATED).json({ token });
  };
}
export default UsersController;