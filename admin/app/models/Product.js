import  mongoose  from "mongoose";
const ProductSchema= new mongoose.Schema({
    title:String,
    price:String,
    description:String,
    image:String,
    category: String},
     {timestamps:true})
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);

