import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import {connectDatabase } from './Config/Db.js'; 
import apiRoutes from './Routes/index.js';
import { notFound, errorHandler } from './Middlewares/errorMiddleware.js';

dotenv.config();
await connectDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/api', apiRoutes);


// basic health
app.get('/', (req, res) => res.send({ ok: true, message: 'Lounge booking backend' }));
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT , () =>{
    console.log(`Server connected at port ${process.env.PORT }`)
})

app.get("/", (req, res) => {
  res.send("HOSTIFY API is running...");
});