import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {validateForm} from '../utility/ValidateForm'

export default function EditModel({ show, onHide, curruntProduct, updatedProduct }) {

  const [userInputData, setUserInputData] = useState({
    productName: "",
    description: "",
    quantity: "",
    expiryDate: "",
    manufacturer: "",
  });
  const [errors, setErrors] = useState({}); 

  useEffect(() => {
    setErrors({});
    if (curruntProduct) {
      setUserInputData(curruntProduct);
    }
  }, [curruntProduct]);

  const onChnageEventHandler = (e) => {
    console.log("value", e.target.name, e.target.value);
    setUserInputData({
      ...userInputData,
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newErrors = validateForm(userInputData);
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log('Form submitted successfully!');
      updatedProduct(userInputData);
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
      console.log(errors , "dkb")
      console.log('Form submission failed due to validation errors.');
  }

  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
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
                        <span className="error-message">
                            {errors.productName}
                        </span>
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
                        <span className="error-message">
                            {errors.description}
                        </span>
                  )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> Quantity</Form.Label>
                <Form.Control
                  placeholder="Enter Product Quantity"
                  type="number"
                  name="quantity"
                  onChange={onChnageEventHandler}
                  value={userInputData.quantity}
                />
                {errors.quantity && (
                        <span className="error-message">
                            {errors.quantity}
                        </span>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  data-date-format="yyyy/mm/dd"
                  placeholder="Enter Expiry Date"
                  type="date"
                  name="expiryDate"
                  onChange={onChnageEventHandler}
                  value={(userInputData?.expiryDate?.split('T')[0])}
                />
                {errors.expiryDate && (
                        <span className="error-message">
                            {errors.expiryDate}
                        </span>
                    )}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control
                  // data-date-format="yyyy/mm/dd"
                  placeholder="Enter Manufacturer"
                  type="text"
                  name="manufacturer"
                  onChange={onChnageEventHandler}
                  value={userInputData.manufacturer}
                />
                {errors.manufacturer && (
                        <span className="error-message">
                            {errors.manufacturer}
                        </span>
                    )}
              </Form.Group>
              <Button
                className="m-2"
                variant="primary"
                type="submit"
                value="Update"
              >
                {" "}
                Update{" "}
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
