const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const {Pool} =require('pg');
const insertFunction=require('./src/db/insertvalue');
const getallvalues = require('./src/db/getallvalues');
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

app.post('/addnewuser',async (req,res)=>{

    try {
          const userData=req.body
        //   console.log('this is my data from user end',userData)

    const myresult=await insertFunction(userData)
    console.log("mtresutk",myresult)

    res.status(201).json({
        message:"User Added Successfully",
        result: myresult
    })  
        
    } catch (error) {
        res.status(501).json({
            error:error.message
        })
        
    }
  






})


app.get('/allemployee', async (req,res)=>{
    try {
        const myresult = await getallvalues()
        console.log(myresult)
        res.status(201).json({result :myresult})

    } catch (error) {
        res.status(501).json({error:error.message})
    }

})



app.listen(PORT,()=>{
    console.log(`SERVER IS UP AND RUNNING ON http://localhost:${PORT}`)
})

