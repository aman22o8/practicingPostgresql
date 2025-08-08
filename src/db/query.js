const pool=require('./index')


const queryCreateingTable=`
CREATE TABLE IF NOT EXISTS emoplyee_info(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
employee_code VARCHAR(100) NOT NULL,
phone_no INTEGER NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
organisation VARCHAR(100) NOT NULL 
);
`;

(
    async ()=>{
        try {
          const result = await pool.query(queryCreateingTable)
         
            console.log("TABLE CREATED SUCCESFULLY")
        } catch (error) {
            console.log(error.message)
      }finally{
            await pool.end();
      }
    }
)();


