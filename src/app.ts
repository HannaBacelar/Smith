import express from 'express';
import ProductsRoutes from './routes/Products.routes';

const app = express();
app.use(express.json());
app.use('/products', ProductsRoutes);
export default app;
