import express from 'express';
import './db/server.js';
import { errorHandler } from './middlewares/ErrorHandler.js';
import Router from './routes/Router.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/books', Router);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port: ${port}`));