// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
// Start up an instance of app
const app=express();
const bodyParser=require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
let serv;
const port=3000;
serv=app.listen(port,listen);
function listen()
{
    console.log(`server is  runing on localhost:${port}`);
   
}
//post data to server
const postData =(req,res)=> {
    projectData=req.body; 
    res.send(projectData);
    console.log(projectData); 
}
app.post('/add',postData)
//get data from server

const getData=(req,res)=>{
    res.send(projectData);
    
}
app.get('/all',getData)