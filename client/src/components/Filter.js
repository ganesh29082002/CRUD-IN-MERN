
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useMemo } from "react";

export default function Filter({ toggleProductModel, setfilterValue }) {
  const handleFilterChange = (e) => {
    setfilterValue(e.target.value);
  };

  return (
    <div>
      <div className="text-right" style={{ display: "flex",justifyContent: "space-between",marginTop: "10px",}}>
        <FloatingLabel controlId="floatingInput" label="search" className="mb-1">
          <Form.Control type="email" placeholder="name@example.com" onChange={handleFilterChange}/>
        </FloatingLabel>
        <div>
          <Button variant="primary" onClick={() => toggleProductModel(true)}>Add Product</Button>
        </div>
      </div>
    </div>
  );
}
