var express = require('express');
var router = express.Router();
const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize('detail','root','root',{
    host:'localhost',
    dialect:'mysql'

});


  
  //async function:
 async function add()
{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
  add();

  router.get('/' , (req, res) => {
    mysqlConnection.query('select * from worker;', (err, rows, fields) => {
    if (!err)
    res.send(rows);
 //return res.console.log(rows);    
    else
    console.log(err);
    })
 } );
//Router to GET specific worker detail from the MySQL database
router.get('/:id' , (req, res) => {
mysqlConnection.query('SELECT * from worker WHERE workid = ?',[req.params.id], (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
 })
} );


/*Router to POST specific items
router.post('/worker/add',(req,res,next)=>{
var designation ='Rishi';
var location = 'TVM'
var State = 'Kerala'

mysqlConnection.query('insert into worker(designation,location,State) values()',
(err,result)
)
})*/

module.exports=router;