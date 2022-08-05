import express from 'express';
import OrderRoutes from './routes/order.routes';
import ProductsRoutes from './routes/Products.routes';
import UsersRoutes from './routes/Users.routes';

const app = express();
app.use(express.json());
app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrderRoutes);
export default app;
