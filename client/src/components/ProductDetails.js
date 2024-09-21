import React, { useEffect, useState, useMemo } from "react";
import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import ViewModel from "./ViewProduct";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Header from "./Header";
import { filterData } from "../utility/FilterData";
import Spinner from "react-bootstrap/Spinner";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  viewProduct,
  fetchProduct,
  handlePageChange,
} from "../utility/productOperations";

export default function ProductDetails() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false); // Correct setter name
  const [loading, setLoading] = useState(false); 
  const [productData, setProductData] = useState([]);
  const [curruntProduct, setCurruntProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const [filterValue, setfilterValue] = useState("");
  const [paginationValue, setpaginationValue] = useState({
    curruntPage: 1,
    limit: 3,
    activePage: 1,
    totalPages: 1,
  });

  // Fetch data on component mount and product update
  useEffect(() => {
    setLoading(true);
    fetchProduct(setProductData, setpaginationValue, paginationValue);
    setLoading(false);
  }, [updatedProduct]);

  const filterData1 = useMemo(
    () => filterData(productData, filterValue),
    [productData, filterValue]
  );

  return (
    <>
      <Header />
      <div className="container">
               {/* Show loading spinner if data is being loaded */}
               {loading && (
          <div className="text-center my-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) }

        
        {/* Filter bar and Add button */}

        <Filter
          toggleProductModel={() => setShowAddModal(true)}
          products={productData}
          setfilterValue={setfilterValue}
        />

        {/* Add Product Modal */}
        <AddProduct
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          addProduct={(insertedData) =>
            addProduct(insertedData, setUpdatedProduct)
          }
        />

        {/* Edit Product Modal */}
        <EditProduct
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          curruntProduct={curruntProduct}
          updatedProduct={(updatedProduct) =>
            updateProduct(updatedProduct, setUpdatedProduct)
          }
        />

        {/* View Product Modal */}
        <ViewModel
          show={showViewModal}
          onHide={() => setShowViewModal(false)} // Use the correct setter here
          curruntProduct={curruntProduct}
        />

        {/* Product Table */}
        <ProductTable
          productData={filterData1}
          editProduct={(product) => {
            setCurruntProduct(product);
            setShowEditModal(true);
          }}
          deleteProduct={(productID) =>
            deleteProduct(productID, setUpdatedProduct)
          }
          viewProduct={(product) =>
            viewProduct(product, setCurruntProduct, setShowViewModal) 
          }
        />

        {/* Pagination */}
        <Pagination
          ProductData={productData}
          handlePageChange={(pageNumber) =>
            handlePageChange(
              pageNumber,
              setProductData,
              setpaginationValue,
              paginationValue
            )
          }
          paginationValue={paginationValue}
        />
     
     
      </div>
    </>
  );
}
