const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const connectDB = require('./src/config/db');

const { errorLogger, errorHandler, notFoundHandler } = require('./src/middleware/errorHandler');


const categoryRoutes = require('./src/routes/categoryRoute.js');
const productRoutes = require('./src/routes/productRoute.js');



const categoryRoutes = require('./src/routes/categoryRoute.js');
const productRoutes = require('./src/routes/productRoute.js'); 


connectDB();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors()); 
app.use(express.json()); 


app.get('/', (req, res) => {
    res.json({ message: 'API RESTful funcionando. Visita /api/v1/ para los endpoints.' });
});


const apiRouter = express.Router();
apiRouter.use('/categories', categoryRoutes); 
apiRouter.use('/products', productRoutes);
apiRouter.use('/auth', userRoutes);

app.use('/api/v1', apiRouter);



app.use(errorLogger);
app.use(errorHandler);


app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`📡 Servidor escuchando en http://localhost:${PORT}`);
  console.log('✅ MongoDB conectado exitosamente');

app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada.' });
});

app.listen(PORT, () => {
  console.log(`📡 Servidor escuchando en http://localhost:${PORT}`);

});