const express = require('express');
const app = express();
const userModel = require('../models/User');
const sample = require('../sample');

//http://localhost:8081/employee
app.post('/', async (req, res) => {
  
    const user = new userModel(req.body);  
    try 
    {
        res.status(200).send(user)
    } 
    catch(err) 
    {
        console.log("An Error has occured: " + err)
        res.status(500).send(err)
    }
  });

// POST a User / Create New Records
app.post('/sample', async (req, res) => {
    userModel.insertMany(sample)
})


//CREATE A NEW RESTAURANT RECORD
//http://localhost:8081/users
app.post('/users', async (req, res) => {

    console.log(req.body)
    const users = new userModel(req.body)
    
        try {
          await users.save()
          res.send(users)
          res.status(200).send("User has been added!");
          } 
  
          catch (err) {
            console.log("User WAS NOT ADDED: ERROR" + err)
            res.status(500).send(err);
          }
    });
  

module.exports = app
