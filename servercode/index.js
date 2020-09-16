//Require installed dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
const route = require('./route/route.js');

//Setup DB connection
//mongoose.connect('mongodb+srv://purroadmin:purroadmin@cluster0-oew8a.gcp.mongodb.net/purro_dev?retryWrites=true&w=majority');
 mongoose.connect('mongodb://localhost:27017/rootual_dev');

mongoose.connection.on('connected',()=>{
    console.log("Successfully connected to MongoDB - rootual database")
});
mongoose.connection.on('error',()=>{
    console.log("Error when connecting to MongoDB - rootual database:" +err);
});


//Instantiate server
const PORT = 3000;
app.use(require('express-status-monitor')());
app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

app.get('/',(req, res)=>{ 
    res.send("You have connected with rootual server home");
});
//Setup server to listen on port
app.listen(PORT,()=>{
    console.log("Server started at port: "+ PORT);
});