const mysql = require('mysql');
let con;

const Open = (app) =>{
   new Promise((resolve , reject)=>{
    con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password :'',
        database: 'example'
        });
        con.connect((err)=>{
            if(err){
                con.end()
                reject(err)
            }else{
                console.log('Database Connected....')
                app.set('CONNECTION' , con)
                resolve(true)
            }
        })
   }) 
};

const Close = () =>{
    con.end()
};

module.exports={Open , Close};
