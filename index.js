const cors=require("cors");
const express=require("express");
const app=express();

const {connection}=require("./db.js");
require("dotenv").config();
app.use(express.json());
app.use(cors());

//routes
const {ProjectRouter}=require("./Routes/ProjectRoute");
//routes

app.get('/',()=>{
    res.send("hello database");
});
app.use("/project",ProjectRouter);
app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("connected to database");
    }
    catch(err){console.log(err);}
})