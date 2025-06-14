import express from 'express';
import dotenv from 'dotenv';
import router from './routes/users.routes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); 
app.use('/api', router); 

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto', PORT);
});
