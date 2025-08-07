const {Pool} =require('pg');
const path=require('path')


require('dotenv').config({path:path.join(__dirname,'../../.env')});

console.log('Connecting with:');
console.log('User:', process.env.DB_USER);
console.log('Password:', typeof process.env.DB_PASSWORD, process.env.DB_PASSWORD);
console.log('Host:', process.env.DB_HOST);
console.log('Database:', process.env.DB_NAME);
console.log('Port:', process.env.DB_PORT);


const pool= new Pool({
    user : (process.env.DB_USER),
    host : process.env.DB_HOST,
    password : String(process.env.DB_PASSWORD),
    database :process.env.DB_NAME,
    port : Number(process.env.DB_PORT)
})








module.exports=pool
