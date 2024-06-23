const mysql=require('mysql2');
const express = require('express');
var bodyParser = require('body-parser');
const path=require("path");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'train_app',
    password:'123456'
  });

//   let q="insert into train (name,number,source,destination) values (?,?,?,?)";

//   let trval=["name","number","ahmedabad","surat"];
// let trval=[name,number,source,destination];


//   try{
//   connection.query(q,trval,(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//   })
// }catch(err){
//     console.log(err);
// };

connection.end();

app.post('/register', (req, res) => {
    console.log(req.body);
    let { name, number,source,destination} = req.body;
    const sql="insert into train (name,number,source,destination) values (?,?,?,?)";
    let val=[name=name,
        number=number,
        source=source,
        destination=destination];
    try{
        connection.query(sql,val,(err,result)=>{
          if(err) throw err;
          console.log(result);
        })
      }catch(err){
          console.log(err);
      };
    res.send("Thanks for registering!!!");
});

connection.end();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


  