import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {setupSwagger} from './docs/swaggerConfig.js';
import corsOptions from './config/corsConfig';
import userRouter from './modules/users/user.routes';
import {apiLogger} from './middlewares/apiLogger';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(apiLogger);
setupSwagger(app);
app.use(cors(corsOptions));

app.use('/users', userRouter);


app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
  console.log('Documentação disponível em http://localhost:3000/api-docs');
});
