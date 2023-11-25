const {ProjectfinalModel}=require("../models/ProjectModel");
const express=require("express");
const ProjectRouter=express.Router();


ProjectRouter.get("/get",async(req,res)=>{
  try{
   const projects=await ProjectfinalModel.find({email:req.query.email});
   res.status(200).json(projects);
  }
  catch(err){
   res.status(400).json(err);
  }
});

ProjectRouter.post("/add",async(req,res)=>{
   try{
    const project=await ProjectfinalModel(req.body);
    await project.save();
    res.status(200).json(project);
   }
   catch(err){
    res.status(400).json(err);
   }
});
ProjectRouter.delete("/delete/:id",async(req,res)=>{
  try{
    await ProjectfinalModel.findByIdAndDelete({_id:req.params.id});
    res.status(200).json("deleted successfully");
  }
    catch(err){
        res.status(400).json(err);
       }
});
ProjectRouter.patch("/update/:id",async(req,res)=>{
    try{
   await ProjectfinalModel.findByIdAndUpdate({_id:req.params.id},req.body);
    res.status(200).json("updated successfully");
    }
    catch(err){
        res.status(400).json(err);
       }
});
module.exports={ProjectRouter};
// "Projectname":"a",
// "Projectdescription":"b",
// "Episodes":3