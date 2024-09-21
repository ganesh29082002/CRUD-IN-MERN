//Ganesh Golhar from bajaj institute

const Product = require('../models/product.models');
const {message} = require('../config/messages');

exports.createProduct = async (req, res) => {
    const {productName , description , quantity , expiryDate ,  manufacturer} = req.body
    
    if(!(productName && description && quantity&& expiryDate && manufacturer)) {return res.json({
            success: false, 
            message: message.EMPTY_BODY, 
    })}
    try {
        console.log(req.body)
        const  newProductdData = new Product(req.body);
        await newProductdData.save();
        res.status(201).json({ 
            success: true, 
            message: message.PRODUCT_CREATION_SUCCESS, 
            data:  newProductdData 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: message.PRODUCT_CREATION_FAILUER, 
            error: error.message 
        });
    }
};


exports.getAllProduct = async (req, res) => {
    const {pageNo=1 , pageLimit=10 , search=""} = req.params 
    console.log(pageNo , pageLimit , search)

    const pageNumber =  parseInt(pageNo)
    const pageSize =  parseInt(pageLimit)

    const skip = (pageNumber-1)*pageSize
    console.log(skip)

    const searchQuery = {
        productName:{$regex : search , $options: "i"}
    }
    try {
        const ProductData = await Product.find(searchQuery).skip(skip).limit(pageSize);
        console.log("ProductData", ProductData)
        const totalData = await Product.countDocuments(searchQuery) 
        console.log("totalData" , totalData)
    
        res.status(200).json({ 
            success: true, 
            message: message.PRODUCT_FETCH_SUCCESS, 
            data:{ ProductData : ProductData , curruntPage:pageNumber, totalPages : Math.ceil(totalData/pageSize) , totalCount: totalData   }
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: message.PRODUCT_FETCH_FAILUER, 
            error: error.message 
        });
    }
};

exports.getProductById = async (req, res) => {
    if(!(req.params.id)){
        return res.status(404).json({ 
            success: false, 
            message: message.PRODUCT_NOT_FOUND 
        });
    }
    
    try {
        const ProductData = await Product.findById(req.params.id);
        if (!ProductData) {
            return res.status(404).json({ 
                success: false, 
                message: message.PRODUCT_NOT_FOUND 
            });
        }
        res.status(200).json({ 
            success: true, 
            message: message.PRODUCT_FETCH_SUCCESS, 
            data: ProductData 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: message.PRODUCT_FETCH_FAILUER, 
            error: error.message 
        });
    }
};

exports.updateProduct = async (req, res) => {
    if(!(req.params.id)){
        return res.status(404).json({ 
            success: false, 
            message: message.PRODUCT_NOT_FOUND 
        });
    }
    
    try {
        const ProductData = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ProductData) {
            return res.status(404).json({ 
                success: false, 
                message: message.PRODUCT_UPDATE_FAILUER 
            });
        }
        res.status(200).json({ 
            success: true, 
            message: message.PRODUCT_UPDATE_SUCCESS, 
            data: ProductData 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: message.PRODUCT_UPDATE_FAILUER, 
            error: error.message 
        });
    }
};


exports.deleteProduct = async (req, res) => {
    if(!(req.params.id)){
        return res.status(404).json({ 
            success: false, 
            message: message.PRODUCT_NOT_FOUND 
        });
    }
    
    try {
        const ProductData = await Product.findByIdAndDelete(req.params.id);
        if (!ProductData) {
            return res.status(404).json({ 
                success: false, 
                message: message.PRODUCT_NOT_FOUND
            });
        }
        res.status(200).json({ 
            success: true, 
            message: message.PRODUCT_DELETION_SUCCESS,
            data:ProductData
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message:message.PRODUCT_DELETION_FAILUER, 
            error: error.message 
        });
    }
};
