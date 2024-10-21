const express = require('express')
const cookieParser = require('cookie-parser')
const url = require('url')
const connectDB = require('./config/db');

require('dotenv').config();

const app = express();

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.set('view engine','pug');

app.get('/',(req,res)=>{
    res.render('index');
});

const userRouter = require('./routes/user')
app.use('/user',userRouter);

app.use((req,res,next)=>{
    try{
        res.render(url.parse(req.url,true).pathname.substring(1));  
        
    }
    catch(error){
        const err = new Error('Error in rendering the page');
        err.status=500;
        return next(err);
    }
});

app.use((err,req,res,next)=>{
    res.status(500).render('error',{error:err});
});

const port = process.env.port||600;
app.listen(port,()=>console.log(`server is running at http://localhost:${port}`));
