const getAll = (req , res) =>{
let con = global.Application.get('CONNECTION');
let sql = `SELECT * FROM example`;
con.query(sql , (err, result)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Fetched from DB');
        res.json(result)
    }

})
}

const getSpecific = (req , res) =>{
let con = global.Application.get('CONNECTION');
let id = req.params.id;
let sql = `SELECT * FROM example WHERE ID = ${JSON.stringify(id)}`

con.query(sql , (err , result)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Fetched from DB')
        res.json(result)
    }
})
}
const post = (req , res) =>{
    let con = global.Application.get('CONNECTION');
  const {ID , First_name , Last_name , City } =req.body;
let sql = `INSERT INTO example VALUES (${JSON.stringify(ID)} , ${JSON.stringify(First_name)} ,${JSON.stringify(Last_name)} ,${JSON.stringify(City)})`;

    con.query(sql, (result , err)=>{
        if(err){
            console.log(err);
        }else{
            res.send({result})
        }
    })
}
const put = (req , res) =>{
    let con = global.Application.get('CONNECTION');
    const {ID , First_name , Last_name , City } =req.body;
  let sql = `UPDATE example SET First_name=${JSON.stringify(First_name)},Last_name=${JSON.stringify(Last_name)},City=${JSON.stringify(City)} WHERE ID = ${JSON.stringify(ID)}`
  
      con.query(sql, (result , err)=>{
          if(err){
              console.log(err);
          }else{
              res.send({result})
          }
      })
} 
const deleteById = (req , res) =>{
let con = global.Application.get('CONNECTION');
const id = req.params.id;
let sql = `DELETE FROM example WHERE ID=${JSON.stringify(id)}`
con.query(sql , (err,result)=>{

    if(err){
        console.log(err)
    }else{
        res.send({result})
    }


})
}




module.exports ={getAll, getSpecific , post , put , deleteById};