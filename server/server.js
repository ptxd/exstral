const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const logger =  require('morgan');

//Initialize express
const app = express();

//port numbers
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Log requests to server console
app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

//server testing endpoints
app.get('/getTest',function(req,res){
    console.log('req');
    return res.status(200).send(`test successful`);
});

app.post('/postTest',function(req,res){
    console.log(req);
    return res.status(200).send(`test successful`);
});

app.put('/putTest',function(req,res){
    console.log(req);
    return res.status(200).send(`test successful`);
});

app.delete('/delTest',function(req,res){
    console.log('req');
    return res.status(200).send(`test successful`);
});
//end of all server testing endpoints

app.listen(port,()=>console.log(`Listening on port ${port}`));