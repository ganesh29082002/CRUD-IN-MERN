import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Alert, Modal } from "react-bootstrap";
import { validateForm } from "../utility/ValidateForm";
import Form from "react-bootstrap/Form";
import "../styles/Style.css";
export default function AddProduct({ show, onHide, addProduct }) {
  const [userInputData, setUserInputData] = useState({
    productName: "",
    description: "",
    quantity: "",
    expiryDate: "",
    manufacturer: "",
  });

  const [errors, setErrors] = useState({});
  // for edit input field
  const onChnageEventHandler = (e) => {
    console.log("value", e.target.name, e.target.value);
    setUserInputData({
      ...userInputData,
      [e.target.name]: e.target.value,
    });
  };

  // for submit form
  const onSubmitForm = (e) => {
    e.preventDefault();
    const newErrors = validateForm(userInputData);
    setErrors(newErrors);
    try {
      if (Object.keys(newErrors).length === 0) {
        // Form submission logic here
        console.log("Form submitted successfully!");
        addProduct(userInputData);
        setUserInputData({
          productName: "",
          description: "",
          quantity: "",
          expiryDate: "",
          manufacturer: "",
        });
        setErrors({});
        onHide();
      } else {
        console.log(errors);
        console.log("Form submission failed due to validation errors.");
      }
    } catch (error) {
        alert(error.message)
    }
    
  };

  return (
    <>
      {/* model for add user  */}
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={onSubmitForm}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  placeholder="Enter Product Name"
                  type="text"
                  name="productName"
                  onChange={onChnageEventHandler}
                  value={userInputData.productName}
                />
                {errors.productName && (
                  <span className="error-message"> {errors.productName} </span>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Enter Your Description"
                  type="text"
                  name="description"
                  onChange={onChnageEventHandler}
                  value={userInputData.description}
                />
                {errors.description && (
                  <span className="error-message">{errors.description}</span>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> Quantity</Form.Label>
                <Form.Control
                  placeholder="Enter Your Quantity"
                  type="number"
                  name="quantity"
                  onChange={onChnageEventHandler}
                  value={userInputData.quantity}
                  // required
                />
                {errors.quantity && (
                  <span className="error-message">{errors.quantity}</span>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  placeholder="Enter Expiry Date"
                  type="date"
                  name="expiryDate"
                  onChange={onChnageEventHandler}
                  value={userInputData.expiryDate}
                  // required
                />
                {errors.expiryDate && (
                  <span className="error-message">{errors.expiryDate}</span>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control
                  placeholder="Enter Manufacturer Name"
                  type="text"
                  name="manufacturer"
                  onChange={onChnageEventHandler}
                  value={userInputData.manufacturer}
                  // required
                />
                {errors.manufacturer && (
                  <span className="error-message">{errors.manufacturer}</span>
                )}
              </Form.Group>

              <Button
                className="m-2"
                variant="primary"
                type="submit"
                value="Add"
              >
                {" "}
                add Product{" "}
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
