const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productName: {type:String , require:true},
    description:{type:String , require:true},
    quantity:{type:Number},
    expiryDate: {type:Date},
    manufacturer:String,
})

const Product = mongoose.model("Products" , ProductSchema)

module.exports = Product