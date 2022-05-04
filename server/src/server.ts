import express, { Router } from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

// middleware de uso do json no express
app.use(cors({
  origin: 'https://localhost:3000',
}));
app.use(express.json());
app.use(routes)


//Config da porta que o servidor vai ouvir

app.listen(3333, () => {
  console.log('Http Server Runing...');
});