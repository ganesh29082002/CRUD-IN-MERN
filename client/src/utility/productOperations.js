// productOperations.js
import { createProduct, updateProductApi, removeProduct, fetchAllProduct } from "../apis/productMangeApi";
import { showToastMessage } from "../utility/Alert";

// Handle API errors centrally
const handleApiError = (error, customMessage) => {
  console.error(error.message);
  showToastMessage("error", customMessage || "An unexpected error occurred");
};

// Add Product
export const addProduct = async (insertedData, setUpdatedProduct) => {
  const { productName, description, quantity, expiryDate, manufacturer } = insertedData;
  if (!(productName && description && quantity && expiryDate && manufacturer)) {
    showToastMessage("info", "All fields are required");
    return;
  }
  try {
    const result = await createProduct(insertedData);
    showToastMessage("success", "Product created successfully");
    setUpdatedProduct(result?.data?.data || null); // Ensure no undefined value
  } catch (error) {
    handleApiError(error, "Error while inserting data");
  }
};

// Update Product
export const updateProduct = async (updatedProduct, setUpdatedProduct) => {
  if (!updatedProduct || !updatedProduct.id) {
    showToastMessage("info", "Product data is incomplete");
    return;
  }
  try {
    const result = await updateProductApi(updatedProduct);
    showToastMessage("success", "Product updated successfully");
    setUpdatedProduct(result?.data?.data || null);
  } catch (error) {
    handleApiError(error, "Error while updating product");
  }
};

// Delete Product
export const deleteProduct = async (productID, setUpdatedProduct) => {
  const confirmBox = window.confirm("Do you really want to delete this product?");
  if (confirmBox === true && productID) {
    try {
      const result = await removeProduct(productID);
      showToastMessage("success", "Product deleted successfully");
      setUpdatedProduct(result?.data?.data || null);
    } catch (error) {
      handleApiError(error, "Error while deleting product");
    }
  } else {
    showToastMessage("info", "Product ID is required for deletion");
  }
};

// View Product
export const viewProduct = (product, setCurruntProduct, toggleProductViewModel) => {
  if (product) {
    setCurruntProduct(product);
    toggleProductViewModel(true);
  } else {
    showToastMessage("info", "Invalid product details");
  }
};

// Fetch Products
export const fetchProduct = async (setProductData, setPaginationValue, paginationValue) => {
  try {
    const result = await fetchAllProduct(paginationValue?.curruntPage || 1, paginationValue?.limit || 3);
    setProductData(result?.ProductData || []);
    setPaginationValue({
      ...paginationValue,
      curruntPage: result?.curruntPage || 1,
      totalPages: result?.totalPages || 1,
    });
  } catch (error) {
    handleApiError(error, "Error while fetching products");
  }
};

// Handle Pagination
export const handlePageChange = async (pageNumber, setProductData, setPaginationValue, paginationValue) => {
  if (!pageNumber || pageNumber < 1) {
    showToastMessage("info", "Invalid page number");
    return;
  }
  try {
    const result = await fetchAllProduct(pageNumber, paginationValue?.limit || 3);
    setProductData(result?.ProductData || []);
    setPaginationValue({
      ...paginationValue,
      curruntPage: result?.curruntPage || pageNumber,
      totalPages: result?.totalPages || 1,
    });
  } catch (error) {
    handleApiError(error, "Error while fetching page data");
  }
};
