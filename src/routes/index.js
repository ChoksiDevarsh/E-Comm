const express = require('express');
const userRouter = require('../routes/userRoutes')
const productRouter = require('../routes/productRoutes')

const route = express();

route.use('/user', userRouter);
route.use('/product', productRouter);



module.exports = route