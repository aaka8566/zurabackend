const mongoose=require("mongoose");
const Projectschema=mongoose.Schema({
Projectname:String,
Projectdescription:String,
Episodes:Number
});
const ProjectfinalModel=mongoose.model("projectmodel",Projectschema);
module.exports={ProjectfinalModel};