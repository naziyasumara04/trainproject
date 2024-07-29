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


  connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit the process with an error code
    }
    console.log('Connected to the database');
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



app.post('/register', (req, res) => {
    console.log(req.body);
    let { name, number,source,destination} = req.body;
    const sql="insert into train (name,number,source,destination) values (?,?,?,?)";
    let val=[name,
        number,
        source,
        destination];
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

app.get('/trains', (req, res) => {
    const sql = "SELECT number FROM train";
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching train numbers");
            return;
        }
        res.json(results.map(row => row.number));
    });
});

// connection.end();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


  