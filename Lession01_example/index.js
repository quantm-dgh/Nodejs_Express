const express = require ('express')
const app = express()
const port = 3000 
var userRoute = require('./routes/user.route');
 
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());// for parsing application/json
app.use(express.urlencoded({ extended: true })) ;// for parsing application/x-www-form-urlencoded

app.use(express.static('public')); 

app.get('/', (req, res) => 
    res.render('index',{
        name: 'Minh'
    }
));
app.use('/users', userRoute);

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`)) 