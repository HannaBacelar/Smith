// ./routes/books.routes.ts
import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();
const usersController = new UsersController();
router.post('/', usersController.usersCreated);
export default router;