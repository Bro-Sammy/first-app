// We will install and require Expressjs
const express = require('express');

//Create an express app
const app = express();


//Declare a 'root' route "/" to repsond with a 
//Hello Woohoo! we made it!
app.get("/", (req, res)=>{
    console.table(["Sam", 'Kenny', 'Julius']);
    res.send("Web Power")
});

//Setup a port 5000 at which our app will listen for 
//requests and respond
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port} >>>`);
    
});