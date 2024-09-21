//Ganesh Golhar from bajaj institute

const express  = require('express');
const bodyParser = require('body-parser')
const productRoutes = require('./routes/products.routes')
const cors = require('cors')
require('dotenv').config();
require('./db/db').connect()
const app = express();

// middleware
app.use(cors())
app.use(express.json())


//routes
app.use('/api',productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server is runing on ${process.env.PORT}`)
})