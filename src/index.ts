// Node + Express -> server setup

import express , {Response, Request} from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
require('dotenv').config()

// init express app
const app = express();

// import routes
const TodoRoute = require('./routes/index')

// connect the MongoDb
const uri : any  = process.env.URI
mongoose.connect(uri, {
useCreateIndex : true,
useFindAndModify: false,
useUnifiedTopology: true,
useNewUrlParser: true
}).then(data => console.log("Database connected successfully"))
.catch(err => console.log("Database connection unsuccessful"))

// config middlewares
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// config route middlewares
app.use('/api',TodoRoute)

// server set up

const port = process.env.PORT
app.listen(port, () : void => {
    if(!port) console.log("server is not running")
    console.log(`server is running @ http://localhost:${port}`)
})