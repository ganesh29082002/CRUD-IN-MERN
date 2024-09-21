import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const createProduct = async(productData) =>{
    console.log("inside createproductData" , productData)
 
    try {
        const insertedData = await axios.post(`${BASE_URL}/api/products/v1/` , productData)
        console.log(insertedData)
        return insertedData
    } catch (error) {
        console.log(error.message)  
    }
}
export const fetchAllProduct = async(pageNumber,pageLimit) =>{
    console.log("inside createproductData" )

    try {
        const fetchData = await axios.get(`${BASE_URL}/api/products/v1/${pageNumber}/${pageLimit}`)
        console.log(fetchData.data.data , "fetchData")
        return fetchData.data.data;
    } catch (error) {
        console.log(error.message)  
    }
}

export const getProductBuId = async(productData) =>{
    console.log("inside createproductData" , productData)

    try {
        const insertedData = await axios.get(`${BASE_URL}/api/products/v1/${productData._id}` , productData)
        console.log(insertedData)
    } catch (error) {
        console.log(error.message)  
    }
}

export const updateProductApi = async(productData) =>{
    console.log("inside createproductData" , productData)
    try {
        const updatedProduct= await axios.put(`${BASE_URL}/api/products/v1/${productData._id}` , productData)
        return updatedProduct 
    } catch (error) {
        console.log(error.message)  
    }
}

export const removeProduct = async(id) =>{
    console.log("inside createproductData" , id)

    try {
        const deletedProduct = await axios.delete(`${BASE_URL}/api/products/v1/${id}`)
        console.log(deletedProduct)
        return deletedProduct
    } catch (error) {
        console.log(error.message)  
    }
}

