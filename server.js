const express = require('express') 
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleWare');

//routes path
const authRoutes = require('./routes/authRoutes');


//dotenv Configuration
dotenv.config();
//Using express we can create rest object.
//Rest Object --> It gives us an app object through which we can listen the server in any port

//Mongo connection
connectDB();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(errorHandler );

const PORT = process.env.PORT || 8080;

//API Routes
app.use('/api/v1/auth', authRoutes)

//Listen server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} on port no ${PORT}` .bgCyan.white);
});
