const express = require('express');
const bodyParser = require('body-parser');
const app =express()

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/calculator.html')
})

app.post('/',function (req,res) {
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var result = n1+n2
    res.send('The result is '+result)
})
app.get('/bmi',function(req,res){
    res.sendFile(__dirname+'/bmi.html')
})

app.post('/bmi',function (req,res) {
    var wt = parseFloat(req.body.weight)
    var ht = parseFloat(req.body.height)
    var bmi = wt/(ht*ht)
    res.send("Your BMI is "+bmi)
})


app.listen(3000,function(){
    console.log('Server started at port 3000');
})
