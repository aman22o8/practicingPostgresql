const pool=require('./index');




const insertFunction= async ()=>{

    try {
         const textQuery='INSERT INTO emoplyee_info(name,employee_code,phone_no,email,organisation) VALUES ($1,$2,$3,$4,$5) RETURNING *'
        const values=["Neeraj Kumar","HPCL52015",987654321,'kumarneeaj@cht.gov.in',"HPCL"]

        const res= await pool.query(textQuery,values)

        console.log(res.rows[0])
        console.log('VALUE ADDED SUCCESSFULLY')
    } catch (error) {
        console.log(error.message)
    }
       
    }

insertFunction()