const express = require("express")
const app = express()
const Datastore = require('nedb')
const { exec } = require('child_process');
let time = 3;


const database = new Datastore("database.db")
database.loadDatabase()

// function makeTxt(){
// exec('python script.py', (err, stdout, stderr) => {
//     if (err) {
// console.log("Error on python script")
//       return;
//     }
  
//     // the *entire* stdout and stderr (buffered)
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
//   });
// }
const port = 80
app.use(express.static("View"))
app.use(express.json({"limit":"1mb"}))


app.listen(port,()=>{
    console.log(`server running on port : ${port}`)

})

// app.post("/downloadData",(req,res)=>{
// console.log(req.body.passCode)
// if(req.body.passCode === password && time >0){
//   //makeTxt()
//   res.json()
//   console.log("done")
// }
// else{
//   res.json({status:"Incorrect",message: `mistake ${time} more tries`})
//   time--
// }


// })




app.post("/Commit",(req,res)=>{
let data = req.body
database.insert(data)
console.log(data)
res.json({status:"Success"
})
})