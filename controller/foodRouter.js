const express=require("express")
const foodModel=require("../model/foodModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let foodss=new foodModel(data)
    let result=await foodss.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data=await foodModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let data=await foodModel.find(input)
    res.json(data)
})

module.exports=router