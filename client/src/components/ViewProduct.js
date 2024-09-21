import React from 'react'
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
 
export default function ViewUser({show , onHide , curruntProduct}) {
  return (
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title> Product Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control placeholder="Enter Product Name" type='text'  name='description'  value={curruntProduct?.productName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter Your Email" type='text'  name='quantity'  value={curruntProduct?.description} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> Quantity</Form.Label>
                    <Form.Control placeholder="Enter Your Product Quantity" type='number'  name='phoneNumber'  value={curruntProduct?.quantity} />
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control placeholder="Enter Expiry Date" type='date'  name='expiryDate'  value={curruntProduct?.expiryDate?.split('T')[0]} />
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
                  
                  value={curruntProduct?.manufacturer}
                />
              </Form.Group>

      {/* <form>
        <input type='text'  name='name'  value={curruntProduct?.name} />
        <input type='text'  name='age'  value={curruntProduct?.age} />
        <input type='email' name='email'   value={curruntProduct?.email}/>
        <input type='Number' name='phoneNumber'  value={curruntProduct?.phoneNumber}/>
        <input type='password' name='password' value={curruntProduct?.password}/>
      </form> */}
    </div>
    </Modal.Body>

  </Modal>
  )
}
