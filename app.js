const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const {Pool} =require('pg');
require('dotenv').config();
const app =express();
exports.app = app;

const PORT = process.env.PORT || 3000;

// To Connect NODE js with DataBase POSTGRESQL



app.use(cookieParser()); //This paarses cookie coming fron the frontend like in axios {withCredentials:true}
app.use(express.urlencoded({extended:true}))//This parses form data(application/x-www-form-urlencoded) in to req.body
app.use(express.json()) // This parses JSON request coming from Frontend {Content-Type :application/json} into req.body


app.get('/',(req,res)=>{
    res.status(200).send('ok')
})




app.listen(PORT,()=>{
    console.log(`SERVER IS UP AND RUNNING ON http://localhost:${PORT}`)
})

