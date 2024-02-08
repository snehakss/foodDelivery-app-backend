const mongoose=require("mongoose")

const foodSchema=new mongoose.Schema(
    {
        name:String,
        price:String,
        place:String
    }
)

module.exports=mongoose.model("foods",foodSchema)