const express = require ('express');
const app = express();
const port = 3000 ;
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute= require('./routes/cart.route'); 

var cookieParser = require('cookie-parser');
var authMiddleware = require('./middlewares/auth.middleware'); 
var sessionMiddleware = require('./middlewares/session.middleware');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());// for parsing application/json
app.use(express.urlencoded({ extended: true })) ;// for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(sessionMiddleware);

app.use(express.static('public')); 

app.get('/', (req, res) => 
    res.render('index',{
        name: 'World'
    }
));
app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/products', productRoute); 
app.use('/auth', authRoute); 
app.use('/cart', cartRoute); 

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`)) 