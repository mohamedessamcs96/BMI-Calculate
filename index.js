const express=require('express');
const bodyParser=require('body-parser');


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
//npm install body-parser

app.get("/",function (req,res) {
  res.sendFile(__dirname+"/index.html");
  //console.log(__dirname);
});
app.post("/",function (req,res) {

  var height=parseFloat(req.body.height);
  var weight=parseFloat(req.body.weight);
  var bmi=weight/(height*height);
  res.send("Your BMI is:"+bmi);
  //console.log(req.body.num1);
  //console.log(req.body.num2);
  //res.send("Thanks for posting");
})

app.listen(3000,function () {
  console.log("Server start at port 3000");

})
