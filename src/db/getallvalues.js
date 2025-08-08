const pool=require('./index')


const getallvalues=async()=>{
try {

    const queryText=`SELECT * FROM emoplyee_info`
    const res=await pool.query(queryText)
    // console.log(res.rows)
    return {resultformdatabase:res.rows,databasemessage:"FATA FECTCHED SUCCELFULLY"}

    
} catch (error) {
     return {errormsg:error.message}
    
}

}

module.exports=getallvalues