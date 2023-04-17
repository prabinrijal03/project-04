const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db');
const userModel = require('./model/user.model');

app.use(bodyParser.json());

app.post("/data", async(req,res)=>{
    const newData = new userModel({
    userId: req.body.userId,
    userTime: req.body.userTime,
    userDate: req.body.userDate,
    title: req.body.title
    });
    await newData.save();
    res.send("Data saved successfully");
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});