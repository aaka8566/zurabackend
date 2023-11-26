const mongoose=require("mongoose");
const AllProjectlist=new mongoose.Schema({
    "title":String,
    "description":String,
    "status":Boolean,
    "date":String,
});
const Projectschema=mongoose.Schema({
Projectname:String,
Projectdescription:String,
Episodes:Number,
email:String,
Projectlist:[AllProjectlist]
});

const ProjectfinalModel=mongoose.model("projectmodel",Projectschema);
module.exports={ProjectfinalModel};