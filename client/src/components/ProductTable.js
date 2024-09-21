import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import EditMOdel from "./EditProduct";

export default function ProductTable({ productData, editProduct, deleteProduct , viewProduct }) {
  return (
      <div className="mt-4 table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Manufacturer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData?.map((data) => (
              <tr key={data._id}>
                <td>{data.productName}</td>
                <td>{data.description}</td>
                <td>{data.quantity}</td>
                <td>{data.expiryDate.split('T')[0]}</td>
                <td>{data.manufacturer}</td>

                <td className="">
                  <div className="p-2" style={{ padding: "4px", display:"flex", gap:2}}>
                    <Button variant="info" size="sm" onClick={() => viewProduct(data)}><FaEye /></Button>
                    <Button variant="success" size="sm" onClick={() => editProduct(data)}> <FaEdit /> </Button>
                    <Button variant="danger" size="sm" onClick={() => deleteProduct(data._id)}><MdDelete /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    
  );
}
