import express from 'express';
import ProductsRoutes from './routes/Products.routes';
import UsersRoutes from './routes/Users.routes';

const app = express();
app.use(express.json());
app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
export default app;
