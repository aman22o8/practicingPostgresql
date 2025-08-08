const pool=require('./index');




const insertFunction= async (mydata)=>{

    console.log('GOT this',mydata.name,mydata.employee_code,Number(mydata.phone_no),mydata.email,mydata.organisation)

    try {
         const textQuery='INSERT INTO emoplyee_info(name,employee_code,phone_no,email,organisation) VALUES ($1,$2,$3,$4,$5) RETURNING *'
         console.log(mydata)
        const values=[mydata.name,mydata.employee_code,Number(mydata.phone_no),mydata.email,mydata.organisation]

        const res= await pool.query(textQuery,values)

        // console.log('DATA RECEIVED FROM DATA BASE',res.rows[0])
        // console.log('VALUE ADDED SUCCESSFULLY IN THE DATA BASE')
        return {result_from_database:res.rows[0],messagereceived:'VALUE ADDED SUCCESSFULLY IN THE DATA BASE'}
    } catch (error) {
        console.log(error.message)
        return {errormsg:error.message}
    }
       
    }

module.exports=insertFunction;